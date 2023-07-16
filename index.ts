import 'dotenv/config'
import { HTTP_PORT, WS_PORT } from './src/const.js'
import { httpServer } from './src/http-server/index'

const httpPort = process.env.HTTP_PORT ? +process.env.HTTP_PORT : HTTP_PORT
const wsPort = process.env.WS_PORT ? +process.env.WS_PORT : WS_PORT

console.log(`Start static http server on the ${httpPort} port!`)
console.log(`WebSocket will run on the ${wsPort} port!`)
httpServer.listen(httpPort)
