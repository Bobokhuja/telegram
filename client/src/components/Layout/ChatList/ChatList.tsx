import React, { useContext, useEffect, useState } from 'react'
import classes from './ChatList.module.scss'
import ChatItem from './ChatItem/ChatItem'
import { ChatsContext } from '../../../App'

type IChat = {
  id: string
  address: string
  title: string
  date: string
  text: string
  sender: string
}

function ChatList() {
  const chats = useContext(ChatsContext)
  // console.log(chats)
  return (
    <div className={classes.ChatList}>
      <div className={classes.Wrapper}>
        {
          chats.map((chat: any) => (
              <ChatItem
                key={chat.id}
                title={chat.participant.name}
                text={chat.lastMessage && chat.lastMessage.message || 'no messages'}
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

export default ChatList