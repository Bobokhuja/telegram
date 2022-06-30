import { serverIp } from '../../utils/server'
import { getLastMessage } from './Message.service'

export type IChat = {
  address: string | undefined
  id: string // Chat id
  chatName: string // address of chatRoute
  name: string // full name of chatRoute
}

export type IChatForChatList = {
  id: string
  chatName: string
  name: string
  lastMessageDate?: Date
  lastTextMessage?: string
  lastTextSender?: string
}

export function getFormatDate(date: Date, type: string = 'time') {
  if (date.toLocaleDateString() === new Date().toLocaleDateString()) return date.toLocaleTimeString().slice(0, -3)
  return date.toLocaleDateString()
}

export async function getChatList(userId: string): Promise<IChatForChatList[]> {
  const response = await fetch(`${serverIp}/chat?id=${userId}&format=data-chats`)
  return await response.json()
}

export async function checkChat(userId: string, chatName: string | undefined): Promise<boolean> {
  return (await getChatList(userId)).some(chat => chat.chatName === chatName)
}