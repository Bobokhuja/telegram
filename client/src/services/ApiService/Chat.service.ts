import { IUser } from './User.service'
import { IMessage } from './Message.service'

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

export async function getChatList(): Promise<IChat[]> {
  const response = await fetch('http://192.168.0.100:8080/chat')
  return await response.json()
}

export async function getNewDataChats(): Promise<IDataChat[]> {
  return (await getChatList()).map((chat, index) => {
    let lastMessage: IMessage = messages.getLastMessage(chat.id)
    let date: string = ''
    let text: string = 'no messages'
    let sender: IUser = users.find(user => {
      if (lastMessage) {
        date = getFormatDate(lastMessage.date)
        text = lastMessage.message
        if (user.id === lastMessage.userId) return true
      }
      return false
    })!

    return {
      id: chat.id,
      title: chat.name,
      text,
      sender: sender && sender!.name,
      address: chat.chatName,
      date
    }
  })
}