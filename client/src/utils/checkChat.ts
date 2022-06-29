import chatList from '../data/chatList'

export default function checkChat(chatName: string): boolean {
  return chatList.some(chat => chat.chatName === chatName)
}