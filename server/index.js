import path from 'node:path'
import express from 'express'
import cors from 'cors'
import { router } from './routes/routes.js'
import { access, writeFile, readFile } from 'fs/promises'
import mysql from 'mysql'

export const app = express()
app.use(cors())
app.use('/', router)
app.use(express.json({
  type: 'application/json'
}))
const port = 8080

export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '[$mysql~$]:{ABobokhuja#%2021%$}',
  database: 'telegram'
})

// connection.connect();

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
    name: 'Abdulloev Abdurahmon',
    avatar: 'https://picsum.photos/50/50'
  },
  {
    id: '2',
    username: 'burhon',
    name: 'Abdulloev Burhon',
    avatar: 'https://picsum.photos/50/50'
  },
  {
    id: '3',
    username: 'dexter',
    name: 'Dexter Morgan',
    avatar: 'https://picsum.photos/50/50'
  },
  {
    id: '4',
    username: 'shodmon',
    name: 'Nakimov Shodmon',
    avatar: 'https://picsum.photos/50/50'
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
export const contacts = [
  {
    user: '1',
    addedContact: '2'
  },
  {
    user: '1',
    addedContact: '4'
  },
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

// const end = connection.end(function(err){
//   if(!err){
//     console.log("Mysql connection is terminated.")
//   }
//   else{
//     throw err;
//   }
// });