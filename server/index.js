import path from 'node:path'
import express from 'express'
import cors from 'cors'
import { router } from './routes/routes.js'
import { access, writeFile, readFile } from 'fs/promises'
import * as constants from 'constants'

export const app = express()
app.use(cors())
app.use('/', router)
app.use(express.json({
  type: 'application/json'
}))
const port = 8080

// export let messages = [
//   {
//     id: '1',
//     chatId: '1',
//     senderId: '1',
//     message: 'Салом',
//     date: new Date(2022, 5, 29, 0, 0, 0, 0)
//   },
//   {
//     id: '2',
//     chatId: '1',
//     senderId: '2',
//     message: 'Воъалейкум салом',
//     date: new Date(2022, 5, 29, 0, 1, 0, 0)
//   },
//   {
//     id: '3',
//     chatId: '1',
//     senderId: '1',
//     message: 'Саломатие чхе?',
//     date: new Date(2022, 5, 29, 0, 2, 0, 0)
//   },
//   {
//     id: '4',
//     chatId: '1',
//     senderId: '2',
//     message: 'Соз рахмат!',
//     date: new Date(2022, 5, 29, 0, 3, 0, 0)
//   },
//   {
//     id: '5',
//     chatId: '2',
//     senderId: '4',
//     message: 'Але чокди',
//     date: new Date(2022, 5, 30, 17, 45, 23, 804)
//   }
// ]
export let messages = []

async function checkFile(chatId) {
  try {
    await access(`./messages/${chatId}/message.txt`, constants.R_OK)
    return true
  } catch (error) {
    return false
  }
}

try {
  const messagesStringify = await readFile('./data/messages.txt', 'utf8')
  if (messagesStringify[0] !== '[') await writeFile('./data/messages.txt', '[]')

  messages = JSON.parse(messagesStringify)
} catch (error) {

}

async function setMessageInFile() {
  await writeFile('./data/messages.txt', JSON.stringify(messages, null, 2))
}

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
  {
    id: '4',
    username: 'shodmon',
    name: 'Nakimov Shodmon'
  },
]
export const chatList = [
  {
    id: '1',
    participantsId: ['1', '2']
  },
  {
    id: '2',
    participantsId: ['1', '4']
  },
  {
    id: '3',
    participantsId: ['2', '3']
  }
]

function nextMessageId(messages) {
  return !messages.length
    ? '1'
    : (Math.max(...messages.map(message => +message.id)) + 1).toString()
}

export async function setMessage(message, chatId) {
  const newMessage = {
    id: nextMessageId(messages),
    chatId,
    ...message,
  }
  messages.push(newMessage)
  await setMessageInFile()
  return newMessage
}

app.listen(port, () => {
  console.log('Server starting in port', port)
})