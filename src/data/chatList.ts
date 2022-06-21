interface IChatList {
  id: string // Chat id
  chatName: string // address of chat
  name: string // full name of chat
  userId: string // creator chat user id
  participantsId: Array<string> // array of user id participants
}

const chatList: Array<IChatList> = [
  {
    id: '1',
    chatName: 'ahmad',
    name: 'Ahmad',
    userId: '1',
    participantsId: ['1', '2']
  }
]

export default chatList