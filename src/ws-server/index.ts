import { WebSocketServer } from 'ws'
import { websoketHandler } from './websoket-handler'

export const createWSServer = (port: number) => {
  const wss = new WebSocketServer({ port })

  wss.on('connection', function connection(ws) {
    ws.on('error', console.error)
    ws.on('close', () => console.log('WebSocket connection closed!'))

    ws.on('message', websoketHandler)
  })

  process.on('exit', () => {
    wss.clients.forEach(ws => ws.close())
    wss.close()

    console.log('WebSocket server connection closed')
  })
}
