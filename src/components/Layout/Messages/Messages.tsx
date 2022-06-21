import React, {ChangeEvent, ChangeEventHandler, useContext, useEffect, useRef, useState} from 'react'
import classes from './Messages.module.scss'
import HeaderMessages from './HeaderMessages/HeaderMessages'
import {useParams} from 'react-router-dom'
import InputChat from './InputChat/InputChat'
import MessageContainer from './MessageContainer/MessageContainer'
import chatList from '../../../data/chatList'
import messages, {IMessages} from '../../../data/messages'
import {UserContext} from '../Layout'
import {ChatContext} from '../Layout'

type IMessagesComponent = {
  // title: string
  chatMessages: IMessages[]
  setChatMessages: any
  // textMessage: string
  // onChangeInput: any
}

function Messages({chatMessages, setChatMessages}: IMessagesComponent) {
  const [title, setTitle] = useState<string>('')

  const [textMessage, setTextMessage] = useState<string>('')

  const onChangeInput: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTextMessage(event.target.value)
  }
  const divRef = useRef(null)

  const {chat} = useParams()
  const user: any = useContext(UserContext)
  const currentChat: any = useContext(ChatContext)
  useEffect(() => {
    if (chat) setTitle(currentChat.name)
  }, [chat])

  useEffect(() => {
    if (chat) {
      const currentMessages = messages.getMessage(currentChat!.id)
      setChatMessages(currentMessages)
    }
  }, [chat])

  const onSendMessageHandler: any = (text: string) => () => {
    if (!textMessage.trim()) return false
    const currentChat = chatList.find((chatItem) => chatItem.chatName === chat)
    messages.setMessage({
      chatId: currentChat!.id,
      userId: user.id,
      message: text,
      date: new Date()
    })
    const newMessages = messages.getMessage(currentChat!.id)
    setChatMessages(newMessages)
    setTextMessage('')
    console.dir(divRef.current)
  }

  const onKeyPressHandler = (event: any) => {
    if (event.key === 'Enter') onSendMessageHandler(textMessage)()
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
              <MessageContainer divRef={divRef} stateMessages={chatMessages} />
              <InputChat
                onSendMessageHandler={onSendMessageHandler}
                textMessage={textMessage}
                onChangeInput={onChangeInput}
                onKeyPressHandler={onKeyPressHandler}
              />
            </>
          )
      }


    </div>
  )
}

export default Messages