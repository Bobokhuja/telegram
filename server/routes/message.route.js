import { messages, setMessage } from '../index.js'

export const messageRoute = {
  getMessage(req, res) {
    const resultMessages = messages.filter(message => message.chatId === req.params.id)
    res.send(resultMessages)
  },
  setMessage(req, res) {
    // if(!req.body) return res.sendStatus(400);
    setMessage(req.body)
    console.log(req.body)
    res.send(req.body)
  }
}