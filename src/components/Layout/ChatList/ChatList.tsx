import React, {useState} from 'react'
import classes from './ChatList.module.scss'
import ChatItem from './ChatItem/ChatItem'
import chatList from '../../../data/chatList'
import users from '../../../data/users'
import {IMessages} from '../../../data/messages'
import messages from '../../../data/messages'

type IChat = {
  id: string
  address: string
  title: string
  date: string
  text: string
  sender: string
}

const dataChats = chatList.map((chat, index) => {
  let lastMessage = messages.getMessages().reverse().find((message: IMessages) => (message.chatId === chat.id))
  let sender = users.find(user => user.id === lastMessage!.userId)
  const {date} = lastMessage!
  return {
    id: chat.id,
    title: chat.name,
    text: lastMessage!.message,
    sender: sender!.name,
    address: chat.chatName,
    date: `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
  }
})

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