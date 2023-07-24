import { TypeRes } from './const'

export function createResponse<T>(type: TypeRes, data: T): string {
  const dataStr = JSON.stringify(data)
  return JSON.stringify({
    type,
    data: dataStr,
    id: 0,
  })
}
