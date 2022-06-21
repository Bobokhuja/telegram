import React, {ChangeEvent, ChangeEventHandler, useContext, useEffect, useState} from 'react'
import classes from './Messages.module.scss'
import HeaderMessages from './HeaderMessages/HeaderMessages'
import {useParams} from 'react-router-dom'
import InputChat from './InputChat/InputChat'
import MessageContainer from './MessageContainer/MessageContainer'
import chatList from '../../../data/chatList'
import messages, {IMessages} from '../../../data/messages'
import {UserContext} from '../Layout'

function Messages() {
  const [title, setTitle] = useState('')
  const [textMessage, setTextMessage] = useState<string>('')
  const [stateMessages, setStateMessages] = useState<IMessages[]>([])

  const {chat} = useParams()
  const user: any = useContext(UserContext)
  useEffect(() => {
    if (chat) {
      setTitle(currentChat!.name)
    }
  }, [])

  useEffect(() => {
    const currentChat = chatList.find((chatItem) => chatItem.chatName === chat)
    const currentMessages = messages.getMessage(currentChat!.id)
    setStateMessages(currentMessages)
  }, [])
  const currentChat = chatList.find(chatItem => chatItem.chatName === chat)
  const onChangeInput: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTextMessage(event.target.value)
  }

  const onSendMessageHandler: any = (event: any) => {
    const currentChat = chatList.find((chatItem) => chatItem.chatName === chat)
    const currentMessages = messages.getMessage(currentChat!.id)
    messages.setMessage({
      chatId: currentChat!.id,
      userId: user.id,
      message: textMessage,
      date: new Date()
    })
    setStateMessages([
      ...currentMessages,
    ])
  }

  return (
    <div className={classes.Messages}>
      {
        !chat
          ? (
            <p className={classes.Alert}>
              <span className={classes.Alert}>Select a chat to start messaging</span>
            </p>
          )
          : (
            <>
              <HeaderMessages
                title={title}
                chatinfo="online"
              />
              <MessageContainer stateMessages={stateMessages} />
              <InputChat
                onChangeInput={onChangeInput}
                textMessage={textMessage}
                onSendMessageHandler={onSendMessageHandler}
              />
            </>
          )
      }


    </div>
  )
}

export default Messages