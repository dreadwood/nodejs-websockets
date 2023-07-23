import { TypeReq, TypeRes } from './const'

type User = {
  name: string
  index: number
}

export type UserReq = {
  name: string
  password: string
}

export type UserRes = {
  name: string
  index: number
  error: boolean
  errorText: string
}

export type UserWinRes = {
  name: string
  wins: number
}

export type RoomRes = {
  roomId: number
  roomUsers: User[]
}

export type Ships = {
  position: {
    x: number
    y: number
  }
  direction: boolean
  length: number
  type: 'small' | 'medium' | 'large' | 'huge'
}

export type Message = {
  type: TypeReq | TypeRes
  data: string
  id: 0
}
