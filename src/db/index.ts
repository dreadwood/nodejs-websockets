import { UserReq } from '../types'

type User = {
  id: number
  name: string
  password: string
}

type UserWithoutPass = {
  id: number
  name: string
}

type Room = {
  roomId: number
  roomUsers: UserWithoutPass[]
}

class Db {
  users: User[]
  rooms: Room[]

  constructor() {
    this.users = []
    this.rooms = []
  }

  addUser(data: UserReq): UserWithoutPass {
    const userId = this.users.length
    this.users.push({ ...data, id: userId })

    return { name: data.name, id: userId }
  }

  findIdUser(name: string): number {
    return this.users.findIndex(user => user.name === name)
  }

  private getUser(userId: number): UserWithoutPass {
    const user = this.users[userId]

    return { name: user.name, id: user.id }
  }

  checkPassword(userId: number, password: string): boolean {
    return this.users[userId].password === password
  }

  createRoom(userId: number) {
    const roomId = this.rooms.length
    const user = this.getUser(userId)
    const room = {
      roomId,
      roomUsers: [user],
    }

    this.rooms.push(room)
    return room
  }

  getRoom() {
    return this.rooms
  }
}
export const db = new Db()
