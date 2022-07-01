import { messages, setMessage } from '../index.js'

export const messageRoute = {
  getMessages(req, res) {
    res.send(messages)
  },
  getMessage(req, res) {
    res.send(messages.filter(message => message.chatId === req.params.id))
  },
  setMessage(req, res) {
    // if(!req.body) return res.sendStatus(400);
    const newMessage = setMessage(req.body, req.params.id)
    console.log(req.body)
    res.send(newMessage)
  },
  getLastMessage(req, res) {
    const lastMessage = messages
      .filter(message => message.chatId === req.params.id)
      .sort((a, b) => {
        if (a.date < b.date) return -1
      })
      .pop()

    res.send(lastMessage)
  }
}