import { serverIp } from '../../utils/server'

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

export async function getChatList(userId: string): Promise<IChatForChatList[]> {
  const response = await fetch(`${serverIp}/chat?id=${userId}&format=data-chats`)
  return await response.json()
}

export async function checkChat(userId: string, chatName: string | undefined): Promise<boolean> {
  return (await getChatList(userId)).some(chat => chat.participant.username === chatName)
}