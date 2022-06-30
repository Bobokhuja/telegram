import { serverIp } from '../../utils/server'

export type IUser = {
  id: string // User id
  username: string // username
  name: string // lastname userRoute
}

export async function getUser(userId: string) {
  const response = await fetch(`${serverIp}/users/${userId}`)
  return response.json()
}