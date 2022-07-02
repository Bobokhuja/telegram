import React, { ChangeEvent, ChangeEventHandler, useContext, useEffect, useRef, useState } from 'react'
import classes from './Messages.module.scss'
import HeaderMessages from './HeaderMessages/HeaderMessages'
import { useParams } from 'react-router-dom'
import InputChat from './InputChat/InputChat'
import MessageContainer from './MessageContainer/MessageContainer'
import { getMessage, IMessage, setMessage } from '../../../services/ApiService/Message.service'
import { UserContext } from '../../../App'
// import { ChatContext } from '../Layout'
import { ChatContext } from '../../../App'
import { checkChat } from '../../../services/ApiService/Chat.service'
import { getDraft, removeDraft, setDraft } from '../../../utils/draft'

type IMessagesComponent = {
  chatMessages: IMessage[]
  setChatMessages: any
}

function Messages({chatMessages, setChatMessages}: IMessagesComponent) {
  //Hook
  //States
  const [title, setTitle] = useState<string>('')
  const [textMessage, setTextMessage] = useState<string>('')

  //Other Hooks
  const divRef = useRef<any>(null)
  const {chatRoute} = useParams()
  const user: any = useContext(UserContext)
  const chat: any = useContext(ChatContext)

  useEffect(() => {
    checkChat(user.id, chatRoute)
      .then(res => {
        if (res) {
          setTitle(chat.participant.name)
          // setTextMessage(getDraft(currentChat.id))
        }
      })
  }, [chat])

  useEffect(() => {

    checkChat('1', chatRoute)
      .then(res => {
        if (res) {
          // const currentMessages = getMessage(currentChat!.id)
          // setChatMessages(currentMessages)
        }
      })
  }, [chatRoute])

  // Handlers
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
  }

  const onKeyPressHandler = (event: any) => {
    if (event.key === 'Enter') onSendMessageHandler(textMessage)()
  }

  return (
    <div className={classes.Messages}>
      {
        !chatRoute
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
              <MessageContainer divRef={divRef} stateMessages={chatMessages}/>
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