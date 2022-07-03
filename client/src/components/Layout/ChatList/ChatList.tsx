import React, { useContext } from 'react'
import classes from './ChatList.module.scss'
import ChatItem from './ChatItem/ChatItem'
import { ChatsContext } from '../../../App'

export default function ChatList() {
  const chats = useContext(ChatsContext)
  return (
    <div className={classes.ChatList}>
      <div className={classes.Wrapper}>
        {
          chats.map((chat: any) => (
              <ChatItem
                key={chat.id}
                title={chat.participant.name}
                text={(chat.lastMessage && chat.lastMessage.message) || 'no messages'}
                date={chat.lastMessage && chat.lastMessage.date}
                address={chat.participant.username}
                sender={chat.lastMessage.sender && chat.lastMessage.sender.name}
              />
            )
          )
        }
      </div>
    </div>
  )
}