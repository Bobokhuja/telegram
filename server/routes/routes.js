import { user } from './user.js'
import express from 'express'

export const router = express.Router()

router.route('/users').get(user.getUsers)
router.route('/users/:id').get(user.getUserById)