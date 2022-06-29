import { chatList } from '../index.js'

export const chatRoute = {
  getChatList(req, res) {
    res.send(chatList)
  },
  getChat(req, res) {
    const chat = chatList.find(chat => chat.id === req.params.id)
    res.send(chat)
  }
}