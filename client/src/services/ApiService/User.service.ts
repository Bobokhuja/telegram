export type IUser = {
  id: string // User id
  username: string // username
  name: string // lastname userRoute
}

export async function getUser(userId: string) {
  const response = await fetch(`http://192.168.0.100:8080/users/${userId}`)
  return response.json()
}