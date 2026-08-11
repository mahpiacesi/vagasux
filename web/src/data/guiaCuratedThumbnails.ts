/** Thumbnails curadas para links que bloqueiam ou limitam crawlers. */
const guiaCuratedThumbnails: Record<string, string> = {
  'https://gemini.google.com/':
    'https://www.gstatic.com/lamda/images/gemini_aurora_thumbnail_4g_e74822ff0ca4259beb718.png',
  'https://claude.ai/login': 'https://claude.ai/images/claude_ogimage.png',
}

export function getGuiaCuratedThumbnail(url: string): string | null {
  return guiaCuratedThumbnails[url] ?? null
}
