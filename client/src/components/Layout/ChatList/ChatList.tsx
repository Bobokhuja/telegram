import React, { useContext } from 'react'
import classes from './ChatList.module.scss'
import ChatItem from './ChatItem/ChatItem'
import { ChatsContext } from '../../../App'

export default function ChatList() {
  const chats = useContext(ChatsContext)
  console.log(chats)
  return (
    <div className={classes.ChatList}>
      <div className={classes.Wrapper}>
        {
          chats.map((chat: any) => (
              <ChatItem
                key={chat.id}
                avatar={chat.participant.avatar}
                title={chat.participant.name}
                text={(chat.lastMessage && chat.lastMessage.message) || 'no messages'}
                date={chat.lastMessage && chat.lastMessage.date}
                address={chat.participant.username}
                sender={chat.lastMessage && chat.lastMessage.sender && chat.lastMessage.sender.name}
              />
            )
          )
        }
      </div>
    </div>
  )
}