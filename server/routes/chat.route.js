import { chatList, messages, users } from '../index.js'

export const chatRoute = {
  getChatList(req, res) {
    let userChats = chatList.filter(chat => chat.participantsId.includes(req.query.id))
    if (req.query.format === 'data-chats') {
      userChats = userChats.map((chat) => {
        const lastMessage = messages
          .filter(message => message.chatId === chat.id)
          .sort((a, b) => {
            if (a.date < b.date) return -1
          })
          .pop() || {}

        const sender = users.find(user => user.id === lastMessage.userId)
        return {
          id: chat.id,
          title: chat.name,
          text: lastMessage.message || 'no messages',
          sender: sender && sender.name,
          address: chat.chatName,
          date: lastMessage.date && lastMessage.date.toLocaleDateString()
        }
      })
    }
    res.send(userChats)
  },
  getChat(req, res) {
    const chat = chatList.find(chat => chat.id === req.params.id)
    res.send(chat)
  },
  getNewDateChats(req, res) {
    const dataChats = chatList.map(chat => {
      let lastMessage = messages
        .filter(message => message.chatId === req.params.id)
        .sort((a, b) => {
          if (a.date > b.date) return -1
        })
        .pop()
      let date = ''
      let text = 'no messages'
      let sender = users.find(user => user.id === lastMessage.userId)

      return {
        id: req.params.id,
        title: chat.name,
        text,
        sender: sender && sender.name,
        address: chat.chatName,
        date
      }
    })

    res.send(dataChats)

  }
}