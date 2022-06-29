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


app.listen(port, () => {
  console.log('Server starting in port', port)
})