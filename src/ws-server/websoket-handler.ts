import { RawData, WebSocket } from 'ws'
import { TypeReq } from '../const'
import { Message } from '../types'
import { regHandler } from '../handlers/reg'

export function websoketHandler(this: WebSocket, rawData: RawData) {
  try {
    const message = JSON.parse(rawData.toString()) as Message
    console.log('Incoming message: ', message)

    const { type, data } = message

    switch (type) {
      case TypeReq.REG:
        regHandler(this, data)
        break
      case TypeReq.CREATE_ROOM:
        break
      case TypeReq.ADD_USER_TO_ROOM:
        break
      case TypeReq.ADD_SHIPS:
        break
      case TypeReq.ATTACK:
        break
      case TypeReq.RANDOM_ATTACK:
        break
      default:
        break
    }
  } catch (err) {
    if (err instanceof Error) console.error(err.message)
    else console.error(err)
  }
}
