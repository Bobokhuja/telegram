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

type IChatList = {
  dataChats: any
}

function ChatList({dataChats}: IChatList) {
  const chats = useContext(ChatsContext)

  // useEffect(() => {
  //   console.log(chats)
  // }, [chats])
  return (
    <div className={classes.ChatList}>
      <div className={classes.Wrapper}>
        {
          chats.map((chat: any) => (
              <ChatItem
                key={chat.id}
                title={chat.participant.name}
                text={chat.lastMessage && chat.lastMessage.message}
                date={chat.lastMessage && chat.lastMessage.date}
                address={chat.participant.username}
                sender={chat.lastMessage && chat.lastMessage.date}
              />
            )
          )
        }
      </div>
    </div>
  )
}

export default ChatList