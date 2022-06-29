import users, {IUser} from './users'
import messages, {IMessage} from './messages'

export type IChat = {
  id: string // Chat id
  chatName: string // address of chat
  name: string // full name of chat
  userId: string // creator chat user id
  participantsId: string[] // array of user id participants
}

function update(chats: IChat[]) {
  localStorage.setItem('chatList', JSON.stringify(chats))
}

const localChatListString: string | null = localStorage.getItem('chatList')
let localChatList: IChat[] = [
  {
    id: '2',
    chatName: 'burhon',
    name: 'Abdulloev Burhon',
    userId: '1',
    participantsId: ['1', '4']
  },
  {
    id: '1',
    chatName: 'ahmad',
    name: 'Ahmad',
    userId: '1',
    participantsId: ['1', '2']
  }
]
if (localChatListString) localChatList = JSON.parse(localChatListString)
else localStorage.setItem('chatList', JSON.stringify([]))

const chatList: IChat[] = localChatList
update(chatList)

export type IDataChat = {
  id: string
  title: string
  text: string
  sender: string
  address: string
  date: string
}

export function getFormatDate(date: Date, type: string = 'time') {
  if (date.toLocaleDateString() === new Date().toLocaleDateString()) return date.toLocaleTimeString().slice(0, -3)
  return date.toLocaleDateString()
}

export function getNewDataChats(): IDataChat[] {
  return chatList.map((chat, index) => {
    let lastMessage: IMessage = messages.getLastMessage(chat.id)
    let date: string = ''
    let text: string = 'no messages'
    let sender: IUser = users.find(user => {
      if (lastMessage) {
        date = getFormatDate(lastMessage.date)
        text = lastMessage.message
        if (user.id === lastMessage.userId) return true
      }
      return false
    })!

    return {
      id: chat.id,
      title: chat.name,
      text,
      sender: sender && sender!.name,
      address: chat.chatName,
      date
    }
  })
}

export function getChatsByName(value: string) {
  if (value === '') return
}

export default chatList