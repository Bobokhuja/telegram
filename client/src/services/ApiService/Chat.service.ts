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
  participant: {
    id: string
    username: string
    name: string
  },
  lastMessage?: {
    id: string
    chatId: string
    senderId: string
    message: string
    date: string,
    sender: {
      id: string,
      username: string,
      name: string
    }
  }
}

export function getFormatDate(date: Date, type: string = 'time') {
  if (date.toLocaleDateString() === new Date().toLocaleDateString()) return date.toLocaleTimeString().slice(0, -3)
  return date.toLocaleDateString()
}

export async function getChatList(userId: string): Promise<IChatForChatList[]> {
  const response = await fetch(`${serverIp}/chat?id=${userId}&format=data-chats`)
  return await response.json()
}

export async function getChatByUsername(userId: string, chatRoute: string | undefined): Promise<IChatForChatList | undefined> {
  if (!chatRoute) return undefined
  const response = await fetch(`${serverIp}/chat?id=${userId}&format=data-chats`)
  const chats = await response.json()
  return chats.find((chat: IChatForChatList) => chat.participant.username === chatRoute)
}

export async function checkChat(userId: string, chatName: string | undefined): Promise<boolean> {
  console.log(userId)
  return (await getChatList(userId)).some(chat => chat.participant.username === chatName)
}