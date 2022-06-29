import path from 'node:path'
import express from 'express'
import cors from 'cors'
import { router } from './routes/routes.js'

export const app = express()
app.use(cors())
app.use('/', router)
const port = 8080

export const users = [
  {
    id: '1',
    username: 'bobokhuja',
    name: 'Abdulloev Abdurahmon'
  },
  {
    id: '2',
    username: 'burhon',
    name: 'Abdulloev Burhon'
  },
  {
    id: '3',
    username: 'dexter',
    name: 'Dexter Morgan'
  },
]
export const chatList = [
  {
    id: '1',
    chatName: 'ahmad',
    name: 'Ahmad',
    userId: '1',
    participantsId: ['1', '2']
  },
  {
    id: '2',
    chatName: 'burhon',
    name: 'Abdulloev Burhon',
    userId: '1',
    participantsId: ['1', '4']
  }
]
export const messages = [
  {
    id: '1',
    chatId: '1',
    userId: '1',
    message: 'Hi',
    date: new Date(2022, 5, 29, 0, 0, 0, 0)
  },
  {
    id: '2',
    chatId: '1',
    userId: '2',
    message: 'What\'s up',
    date: new Date(2022, 5, 29, 0, 1, 0, 0)
  },
  {
    id: '3',
    chatId: '2',
    userId: '1',
    message: 'Чокади',
    date: new Date(2022, 5, 28, 0, 1, 0, 0)
  },
]

export function setMessage(message) {
  messages.push(message)
}


app.post("/messages/:id", (req, res) => {
  console.log(req.body)
  res.send('hello')
});

app.listen(port, () => {
  console.log('Server starting in port', port)
})