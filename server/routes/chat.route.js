import { chatList, messages, users } from '../index.js'

export const chatRoute = {
  getChatList(req, res) {
    let userChats = chatList
      .filter(chat => chat.participantsId.includes(req.query.id))
      .map(chat => {
        const participantId = chat.participantsId.find(userId => userId !== req.query.id)
        const user = users.find(user => user.id === participantId)
        const lastMessage = messages
          .filter(message => message.chatId === chat.id)
          .sort((a, b) => {
            if (a.date < b.date) return -1
          })
          .pop()
        if (lastMessage) {
          lastMessage.sender = users.find(user => lastMessage.senderId === user.id)
        }
        return {
          id: chat.id,
          participant: user,
          lastMessage,
        }
      })
    res.send(userChats)
  },
  getChat(req, res) {
    const chat = chatList.find(chat => chat.id === req.params.id)
    res.send(chat)
  },
}