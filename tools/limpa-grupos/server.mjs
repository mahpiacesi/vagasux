import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  applyRoteiro,
  closeDeadline,
  createWorld,
  dropSession,
  executeRemoval,
  joinGroup,
  leaveGroup,
  publishNotice,
  rereadNotice,
  setReaction,
  view,
} from './engine.mjs'

const publicDir = fileURLToPath(new URL('./public/', import.meta.url))
const port = Number(process.env.PORT || 8787)
let world = createWorld()

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
}

createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? '/', 'http://127.0.0.1')
    if (req.method === 'GET' && url.pathname === '/api/state') {
      return send(res, 200, view(world, url.searchParams.get('group') || 'g1'))
    }
    if (req.method === 'POST' && url.pathname === '/api/reset') {
      world = createWorld()
      return send(res, 200, view(world, 'g1'))
    }
    const match = url.pathname.match(/^\/api\/groups\/(g[123])\/([a-z-]+)$/)
    if (req.method === 'POST' && match) {
      const [, groupId, action] = match
      const body = await readBody(req)
      const result = runAction(groupId, action, body)
      if (result?.error) return send(res, 400, { error: result.error, ...view(world, groupId) })
      return send(res, 200, view(world, groupId))
    }
    if (req.method === 'GET') return sendFile(res, url.pathname)
    send(res, 404, { error: 'Não encontrado.' })
  } catch (error) {
    console.error(error)
    send(res, 500, { error: 'A simulação falhou ao responder.' })
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Limpa dos grupos em http://127.0.0.1:${port}`)
})

function runAction(groupId, action, body) {
  if (action === 'notice') return publishNotice(world, groupId)
  if (action === 'reaction') return setReaction(world, groupId, body.memberId, body.emoji ?? '')
  if (action === 'join') return joinGroup(world, groupId, body.memberId)
  if (action === 'leave') return leaveGroup(world, groupId, body.memberId)
  if (action === 'deadline') return closeDeadline(world, groupId)
  if (action === 'session-down') return dropSession(world, groupId)
  if (action === 'reread') return rereadNotice(world, groupId)
  if (action === 'execute') return executeRemoval(world, groupId, body.confirmCount)
  if (action === 'roteiro') return applyRoteiro(world, groupId)
  return { error: 'Ação desconhecida.' }
}

function send(res, status, payload) {
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8' })
  res.end(JSON.stringify(payload))
}

async function sendFile(res, pathname) {
  const requested = pathname === '/' ? '/index.html' : pathname
  const filePath = normalize(join(publicDir, requested))
  if (!filePath.startsWith(publicDir)) {
    send(res, 403, { error: 'Caminho recusado.' })
    return
  }
  try {
    const file = await readFile(filePath)
    res.writeHead(200, { 'content-type': types[extname(filePath)] || 'application/octet-stream' })
    res.end(file)
  } catch {
    send(res, 404, { error: 'Não encontrado.' })
  }
}

async function readBody(req) {
  const chunks = []
  let size = 0
  for await (const chunk of req) {
    size += chunk.length
    if (size > 100_000) throw new Error('body too large')
    chunks.push(chunk)
  }
  if (chunks.length === 0) return {}
  return JSON.parse(Buffer.concat(chunks).toString('utf8'))
}
