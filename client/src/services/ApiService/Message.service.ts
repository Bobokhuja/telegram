import { serverIp } from '../../utils/server'

export type IMessage = {
  id?: string
  chatId: string
  senderId: string
  message: string
  date: Date
}

function sortMessageByDateTime(messages: IMessage[]) {
  return messages.sort((a, b): number => (a.date.getTime() > b.date.getTime() ? 1 : -1))
}

export async function getMessage(chatId: string): Promise<IMessage[]> {
  const response = await fetch(`${serverIp}/messages/${chatId}`)
  return response.json()
}
export async function setMessage(chatId: string, message: IMessage) {
  const response = await fetch(`${serverIp}/messages/${chatId}`, {
    method: 'post',
    body: JSON.stringify(message)
  })
  return response.json()
}
export async function getLastMessage(chatId: string): Promise<IMessage> {
  const response = await fetch(`${serverIp}/messages/last-message/${chatId}`)
  return response.json()
}