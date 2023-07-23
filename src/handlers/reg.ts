import { WebSocket } from 'ws'
import { TypeRes } from '../const'
import { db } from '../db'
import { createResponse } from '../helpers'
import { RoomRes, UserReq, UserRes, UserWinRes } from '../types'

export function regHandler(ws: WebSocket, data: string) {
  // TODO: need authorization module
  const userReq = JSON.parse(data) as UserReq
  const userId = db.findIdUser(userReq.name)

  if (userId === -1) {
    const user = db.addUser(userReq)
    const userRes = {
      name: user.name,
      index: user.id,
      error: false,
      errorText: '',
    }

    ws.send(createResponse<UserRes>(TypeRes.REG, userRes))
    ws.send(createResponse<UserWinRes[]>(TypeRes.UPDATE_WINNERS, []))
    ws.send(createResponse<RoomRes[]>(TypeRes.UPDATE_ROOM, []))
    return
  }

  const isPasswordCorrect = db.checkPassword(userId, userReq.password)

  if (isPasswordCorrect) {
    const userRes = {
      name: userReq.name,
      index: userId,
      error: false,
      errorText: '',
    }

    ws.send(createResponse<UserRes>(TypeRes.REG, userRes))
    ws.send(createResponse<UserWinRes[]>(TypeRes.UPDATE_WINNERS, []))
    ws.send(createResponse<RoomRes[]>(TypeRes.UPDATE_ROOM, []))
    return
  }

  const userErrorRes = {
    name: userReq.name,
    index: userId,
    error: true,
    errorText: 'invalid user password',
  }

  ws.send(createResponse<UserRes>(TypeRes.REG, userErrorRes))
}
