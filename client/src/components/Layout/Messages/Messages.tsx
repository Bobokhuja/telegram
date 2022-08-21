import React, { ChangeEvent, ChangeEventHandler, useContext, useEffect, useRef, useState } from 'react'
import classes from './Messages.module.scss'
import HeaderMessages from './HeaderMessages/HeaderMessages'
import { useParams } from 'react-router-dom'
import InputChat from './InputChat/InputChat'
import MessageContainer from './MessageContainer/MessageContainer'
import { IMessage, setMessage } from '../../../services/ApiService/Message.service'
import { UserContext } from '../../../App'
import { ChatContext } from '../Layout'
import { checkChat } from '../../../services/ApiService/Chat.service'
import { removeDraft } from '../../../utils/draft'

type IMessagesComponent = {
  chatMessages: IMessage[]
  setChatMessages: any
}

export default function Messages({chatMessages, setChatMessages}: IMessagesComponent) {
  const [title, setTitle] = useState<string>('')
  const [textMessage, setTextMessage] = useState<string>('')

  const divRef = useRef<any>(null)
  const inputRef = useRef<any>(null)

  const {chatRoute} = useParams()

  const user: any = useContext(UserContext)
  const chat: any = useContext(ChatContext)

  // console.log('Messages', chatMessages[chatMessages.length - 1])

  useEffect(() => {
    if (!user.id) return
    checkChat(user.id, chatRoute)
      .then(res => {
        if (res && chat) setTitle(chat.participant.name)
      })
  }, [chat, chatRoute])

  const onChangeInput: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTextMessage(event.target.value)
    // setDraft(currentChat.id, event.target.value)
  }

  const onSendMessageHandler: any = (text: string) => async () => {
    if (!textMessage.trim()) return false

    const newMessage = await setMessage(chat.id, {
      senderId: user.id,
      message: text,
      date: new Date()
    })
    setChatMessages((prevState: any) => {
      return [
        ...prevState,
        newMessage
      ]
    })
    setTextMessage('')
    removeDraft(chat.id)
    inputRef.current.focus()
  }

  const onKeyPressHandler = (event: any) => {
    if (event.key === 'Enter') onSendMessageHandler(textMessage)()
  }

  if (!chatRoute) {
    return (
      <div className={classes.Messages}>
        <p className={classes.Alert}>
          <span className={classes.Alert}>Select a chat to start messaging</span>
        </p>
      </div>
    )
  }

  return (
    <div className={classes.Messages}>
      <HeaderMessages
        title={title}
        chatInfo="online"
      />
      <MessageContainer
        divRef={divRef}
        stateMessages={chatMessages}
      />
      <InputChat
        onSendMessageHandler={onSendMessageHandler}
        textMessage={textMessage}
        onChangeInput={onChangeInput}
        onKeyPressHandler={onKeyPressHandler}
        inputRef={inputRef}
      />
    </div>
  )
}