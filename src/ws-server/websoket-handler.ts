import { RawData, WebSocket } from 'ws'
import { TypeReq } from '../const'

export function websoketHandler(this: WebSocket, rawData: RawData) {
  try {
    const { type, data } = JSON.parse(rawData.toString())
    console.log(type, data)

    switch (type) {
      case TypeReq.REG:
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
