import { app } from '../index.js'
import { users } from '../index.js'


export const user = {
  getUsers(req, res) {
    res.header('Something', 'else');
    const payload = req.query.username
    const filterUser = users.find(user => user.username === req.query.username) || {}
    res.send(filterUser)
  },
  getUserById(req, res) {
    const user = users.find(user => user.id === req.params.id)
    res.send(user)
  },
  getUserByUsername(req, res) {
  }
}