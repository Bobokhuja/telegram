import { messages, setMessage, connection } from '../index.js'

export const messageRoute = {
  getMessages(req, res) {
    res.send(messages)
  },
  getMessage(req, res) {
    // res.setHeader('Content-Type', 'application/json')
    // const query = `SELECT * FROM message WHERE chat_id=${req.params.id}`
    // connection.connect()
    // connection.query(query, (error, results, fields) => {
    //   // if (error) throw error
    //   console.log(results)
    //   res.send(results)
    // })
    // connection.end()
    res.send(messages.filter(message => message.chatId === req.params.id))
  },
  async setMessage(req, res) {
    // if(!req.body) return res.sendStatus(400);
    const newMessage = await setMessage(req.body, req.params.id)
    console.log(newMessage)
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