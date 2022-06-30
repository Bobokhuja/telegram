import { getUser, IUser } from './User.service'
import { IMessage } from './Message.service'
import messages from './Message.service'
import chatList from '../../data/chatList'

export type IChat = {
  id: string // Chat id
  chatName: string // address of chatRoute
  name: string // full name of chatRoute
  userId: string // creator chatRoute userRoute id
  participantsId: string[] // array of userRoute id participants
}

export type IDataChat = {
  id: string
  title: string
  text: string
  sender: string
  address: string
  date: string
}

export function getFormatDate(date: Date, type: string = 'time') {
  if (date.toLocaleDateString() === new Date().toLocaleDateString()) return date.toLocaleTimeString().slice(0, -3)
  return date.toLocaleDateString()
}

export async function getChatList(userId: string): Promise<IChat[]> {
  const response = await fetch(`http://192.168.0.100:8080/chat?id=${userId}&format=data-chats`)
  return await response.json()
}

export async function checkChat(userId: string, chatName: string | undefined): Promise<boolean> {
  return (await getChatList(userId)).some(chat => chat.chatName === chatName)
}