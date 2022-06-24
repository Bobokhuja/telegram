export type IUser = {
  id: string // User id
  username: string // username
  name: string // lastname user
}

function update(users: IUser[]) {
  localStorage.setItem('users', JSON.stringify(users))
}

const localUsersString: string | null = localStorage.getItem('users')
let localUsers: IUser[] = []
if (localUsersString) localUsers = JSON.parse(localUsersString)
else localStorage.setItem('users', JSON.stringify([]))

const users: IUser[] = localUsers
users.push({id: '1', username: 'bobokhuja', name: 'Abdulloev Abdurahmon'})
users.push({id: '2', username: 'ahmad', name: 'Abdulloev Ahmad'})
users.push({id: '3', username: 'dexter', name: 'Dexter Morgan'})
users.push({id: '4', username: 'burhon', name: 'Abdulloev Burhon'})
update(users)

export default users