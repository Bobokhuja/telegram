import {IUser} from './users'

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

export function getSortChatList() {

}

export default chatList