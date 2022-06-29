import { userRoute } from './user.route.js'
import express from 'express'
import { chatRoute } from './chat.route.js'
import { messageRoute } from './message.route.js'
import { app } from '../index.js'

export const router = express.Router()

router.route('/users').get(userRoute.getUsers)
router.route('/users/:id').get(userRoute.getUserById)
router.route('/chat/').get(chatRoute.getChatList)
router.route('/chat/:id').get(chatRoute.getChat)
router.route('/messages/:id').get(messageRoute.getMessage)
// router.route('/messages/:id').post(messageRoute.setMessage)