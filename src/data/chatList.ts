export type IChat = {
  id: string // Chat id
  chatName: string // address of chat
  name: string // full name of chat
  userId: string // creator chat user id
  participantsId: string[] // array of user id participants
}

const localChatListString: string | null = localStorage.getItem('chatList')
let localChatList: IChat[] = []
if (localChatListString) localChatList = JSON.parse(localChatListString)
else localStorage.setItem('chatList', JSON.stringify([]))

const chatList: IChat[] = localChatList
chatList.push({
  id: '1',
  chatName: 'ahmad',
  name: 'Ahmad',
  userId: '1',
  participantsId: ['1', '2']
})

export default chatList