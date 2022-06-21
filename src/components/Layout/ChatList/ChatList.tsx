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

type IChatList = {
  dataChats: any
}

function ChatList({dataChats}: IChatList) {

  return (
    <div className={classes.ChatList}>
      <div className={classes.Wrapper}>
        {
          dataChats.map((chat: any) => (
              <ChatItem
                key={chat.address}
                title={chat.title}
                text={chat.text}
                date={chat.date}
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