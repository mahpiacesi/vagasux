#!/usr/bin/env node
/**
 * Exporta vídeos da view Notion "Conteúdos em Design" (Tipo = Vídeo)
 * + vídeos do canal VagasUX no YouTube para web/src/data/guiaVideos.ts
 *
 * Uso: node tools/scripts/export-guia-videos.mjs [snapshot.json]
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '../..')
const OUT = join(ROOT, 'web/src/data/guiaVideos.ts')
const DEFAULT_SNAPSHOT = join(__dirname, 'videos-notion.snapshot.json')

const VAGASUX_CHANNEL_ID = 'UCQZzsXevDF-pdlC7ctGzzIw'
const VAGASUX_CHANNEL_VIDEOS_URL = 'https://www.youtube.com/@VagasUX/videos'
const FEATURED_YOUTUBE_VIDEO_ID = '_h94hLBW_D4'

const YOUTUBE_VIDEO_PATTERNS = [
  /youtu\.be\/([a-zA-Z0-9_-]{11})/i,
  /[?&]v=([a-zA-Z0-9_-]{11})/i,
  /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/i,
  /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/i,
]

function parseJsonArray(value) {
  if (!value) return []
  if (Array.isArray(value)) return value
  try {
    const parsed = JSON.parse(value)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function notionPageId(url) {
  const match = String(url).match(/([a-f0-9]{32})/i)
  return match ? match[1].toLowerCase() : ''
}

function stripMarkdown(title) {
  return String(title).replace(/\*\*/g, '').trim()
}

function extractYoutubeVideoId(url) {
  if (!url) return null
  for (const pattern of YOUTUBE_VIDEO_PATTERNS) {
    const match = String(url).match(pattern)
    if (match?.[1]) return match[1]
  }
  return null
}

function youtubeThumbnailUrl(videoId) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
}

function youtubeWatchUrl(videoId) {
  return `https://www.youtube.com/watch?v=${videoId}`
}

function fetchPageHtml(url) {
  return execFileSync(
    'curl',
    ['-fsSL', '-A', 'Mozilla/5.0 (compatible; VagasUX-Export/1.0)', url],
    { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 },
  )
}

function decodeXml(text) {
  return String(text)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function fetchYoutubeOembedTitle(videoId) {
  try {
    const json = execFileSync(
      'curl',
      [
        '-fsSL',
        `https://www.youtube.com/oembed?url=${encodeURIComponent(youtubeWatchUrl(videoId))}&format=json`,
      ],
      { encoding: 'utf8' },
    )
    const data = JSON.parse(json)
    return typeof data.title === 'string' ? data.title : `Vídeo VagasUX`
  } catch {
    return 'Vídeo VagasUX'
  }
}

function fetchVagasuxChannelVideos() {
  const byId = new Map()

  try {
    const rss = fetchPageHtml(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${VAGASUX_CHANNEL_ID}`,
    )
    for (const block of rss.match(/<entry>[\s\S]*?<\/entry>/g) ?? []) {
      const videoId = block.match(/<yt:videoId>([^<]+)/)?.[1]
      const title = block.match(/<title>([^<]+)/)?.[1]
      if (videoId) {
        byId.set(videoId, {
          videoId,
          title: title ? decodeXml(title) : fetchYoutubeOembedTitle(videoId),
        })
      }
    }
  } catch {
    /* RSS optional */
  }

  try {
    const html = fetchPageHtml(VAGASUX_CHANNEL_VIDEOS_URL)
    for (const match of html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)) {
      const videoId = match[1]
      if (!byId.has(videoId)) {
        byId.set(videoId, {
          videoId,
          title: fetchYoutubeOembedTitle(videoId),
        })
      }
    }
  } catch {
    /* scrape optional */
  }

  return [...byId.values()]
}

function isVagasuxAuthor(authors) {
  return authors.some((author) => /vagasux/i.test(author))
}

function mapNotionVideo(row) {
  const id = notionPageId(row.url)
  const authors = parseJsonArray(row['Autor(a)'])
  const context = parseJsonArray(row.Contexto)
  const languages = parseJsonArray(row['Língua'])
  const url = row['Onde encontrar?']?.trim() || ''
  const youtubeVideoId = extractYoutubeVideoId(url)

  const item = {
    id,
    title: stripMarkdown(row.Nome?.trim() || 'Sem título'),
    authors,
    context,
    languages,
    url,
    vagasuxChannel: isVagasuxAuthor(authors) || youtubeVideoId === FEATURED_YOUTUBE_VIDEO_ID,
  }

  if (youtubeVideoId) {
    item.youtubeVideoId = youtubeVideoId
    item.imageUrl = youtubeThumbnailUrl(youtubeVideoId)
  }

  return item
}

function mapChannelVideo(entry) {
  return {
    id: `yt-${entry.videoId}`,
    title: entry.title,
    authors: ['VagasUX'],
    context: ['UX', 'Carreira'],
    languages: ['🇧🇷'],
    url: youtubeWatchUrl(entry.videoId),
    youtubeVideoId: entry.videoId,
    imageUrl: youtubeThumbnailUrl(entry.videoId),
    vagasuxChannel: true,
  }
}

function emitTs(videos) {
  const header = `/** Snapshot Notion "Conteúdos em Design" (Vídeo) + canal VagasUX no YouTube. */
/** Regenerar: node tools/scripts/export-guia-videos.mjs */

export type GuiaVideo = {
  id: string
  title: string
  authors: string[]
  context: string[]
  languages: string[]
  url: string
  /** Thumbnail YouTube i.ytimg.com/vi/ quando aplicável. */
  imageUrl?: string
  youtubeVideoId?: string
  /** Vídeo publicado no canal VagasUX. */
  vagasuxChannel?: boolean
}

/** Vídeo em destaque do canal — "Por que eu não passei na entrevista?" */
export const GUIA_FEATURED_VIDEO_YOUTUBE_ID = '${FEATURED_YOUTUBE_VIDEO_ID}'

export const guiaVideos: GuiaVideo[] = `

  const helpers = `
/** Tags de Contexto únicas, ordenadas (Notion multi_select). */
export function getGuiaVideoContextTags(): string[] {
  const tags = new Set<string>()
  for (const video of guiaVideos) {
    for (const tag of video.context) tags.add(tag)
  }
  return [...tags].sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
}

export function filterGuiaVideosByContext(
  videos: GuiaVideo[],
  contextTag: string | null,
): GuiaVideo[] {
  if (!contextTag) return videos
  return videos.filter((video) => video.context.includes(contextTag))
}

export function splitGuiaFeaturedVideo(videos: GuiaVideo[]): {
  featured: GuiaVideo | null
  rest: GuiaVideo[]
} {
  const featured =
    videos.find((video) => video.youtubeVideoId === GUIA_FEATURED_VIDEO_YOUTUBE_ID) ??
    null
  const rest = videos.filter(
    (video) => video.youtubeVideoId !== GUIA_FEATURED_VIDEO_YOUTUBE_ID,
  )
  return { featured, rest }
}
`

  return `${header}${JSON.stringify(videos, null, 2)}\n${helpers}`
}

const snapshotPath = process.argv[2] || DEFAULT_SNAPSHOT
const raw = JSON.parse(readFileSync(snapshotPath, 'utf8'))
const rows = (raw.results ?? raw).filter((r) => r.Tipo === 'Vídeo')

const notionVideos = rows.map(mapNotionVideo)
const notionYoutubeIds = new Set(
  notionVideos.map((v) => v.youtubeVideoId).filter(Boolean),
)

const channelVideos = fetchVagasuxChannelVideos()
  .filter((entry) => !notionYoutubeIds.has(entry.videoId))
  .map(mapChannelVideo)

const videos = [...notionVideos, ...channelVideos]

writeFileSync(OUT, emitTs(videos), 'utf8')

const withThumbs = videos.filter((v) => v.imageUrl).length
const channelCount = videos.filter((v) => v.vagasuxChannel).length
console.log(
  `Wrote ${videos.length} videos (${withThumbs} with thumbnails, ${channelCount} do canal VagasUX) to ${OUT}`,
)
