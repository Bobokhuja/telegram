import { serverIp } from '../../utils/server'

export type IMessage = {
  id?: string
  chatId: string
  senderId: string
  message: string
  date: Date
}

export async function getMessage(chatId: string): Promise<IMessage[]> {
  const response = await fetch(`${serverIp}/messages/${chatId}`)
  return response.json()
}

export async function setMessage(chatId: string, message: any) {
  const response = await fetch(`${serverIp}/messages/${chatId}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  })
  return response.json()
}