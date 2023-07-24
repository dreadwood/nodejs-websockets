import 'dotenv/config'
import { HTTP_PORT, WS_PORT } from './src/const.js'
import { httpServer } from './src/http-server/index'
import { createWSServer } from './src/ws-server/index'

const httpPort = process.env.HTTP_PORT ? +process.env.HTTP_PORT : HTTP_PORT
const wsPort = process.env.WS_PORT ? +process.env.WS_PORT : WS_PORT

process.on('SIGINT', () => process.exit())

console.log(`Start static http server on the ${httpPort} port!`)
httpServer.listen(httpPort)

console.log(`Start WebSocket server on the ${wsPort} port!`)
createWSServer(wsPort)
