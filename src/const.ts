export const HTTP_PORT = 8181
export const WS_PORT = 3000

export enum TypeReq {
  REG = 'reg',
  CREATE_ROOM = 'create_room',
  ADD_USER_TO_ROOM = 'add_user_to_room',
  ADD_SHIPS = 'add_ships',
  ATTACK = 'attack',
  RANDOM_ATTACK = 'randomAttack',
}

export enum TypeRes {
  REG = 'reg',
  UPDATE_WINNERS = 'update_winners',
  CREATE_GAME = 'create_game',
  UPDATE_ROOM = 'update_room',
  START_GAME = 'start_game',
  ATTACK = 'attack',
  TURN = 'turn',
  FINISH = 'finish',
}
