import React, {useState} from 'react'
import classes from './ChatList.module.scss'
import SearchInput from '../../UI/SearchInput/SearchInput'
import ChatItem from './ChatItem/ChatItem'
import chatList from '../../../data/chatList'
import messages from '../../../data/messages'
import users from '../../../data/users'

type IChat = {
  id: string
  address: string
  title: string
  date: string
  text: string
  sender: string
}

const dataChats = chatList.map((chat, index) => {
  const resultChat = {} as IChat
  let lastMessage = messages.reverse().find(message => (message.chatId === chat.id))
  let sender = users.find(user => user.id === lastMessage!.userId)
  console.log(sender)
  resultChat.id = chat.id
  resultChat.title = chat.name
  resultChat.text = lastMessage!.message
  resultChat.sender = sender!.name
  resultChat.address = chat.chatName
  resultChat.date = lastMessage!.date.toLocaleString()
  return resultChat
})

// const dataChats = [
//   {
//     id: 1,
//     title: 'ReactJS',
//     text: 'Hello',
//     sender: 'Ilmhona',
//     date: '11:30',
//     address: 'reactjs'
//   },
//   {
//     id: 2,
//     title: 'Книги для программистов',
//     text: 'Hello World! this is a public',
//     // sender: '',
//     date: 'Wed',
//     address: 'booksofprogrammer'
//   }
// ]

function ChatList() {

  const [chats, setChats] = useState(dataChats)

  const onClickHandler = (event: MouseEvent) => {

  }

  return (
    <div className={classes.ChatList}>
      <div className={classes.Wrapper}>
        {
          dataChats.map(chat => (
              <ChatItem
                key={chat.address}
                title={chat.title}
                text={chat.text}
                date={chat.date}
                onClick={onClickHandler}
                address={chat.address}
                sender={chat.sender}
              />
            )
          )
        }
      </div>
    </div>
  )
}

export default ChatList