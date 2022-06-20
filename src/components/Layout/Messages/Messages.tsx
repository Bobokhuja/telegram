import React, {useState} from 'react'
import classes from './Messages.module.scss'
import HeaderMessages from './HeaderMessages/HeaderMessages'
import {useParams} from 'react-router-dom'
import InputChat from './InputChat/InputChat'

function Messages() {
  // const [isExistChat, setIsExistChat] = useState<boolean>(true)
  const {chat} = useParams()

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
                title="ReactJS"
                chatinfo="online"
              />

              <InputChat />
            </>
          )
      }


    </div>
  )
}

export default Messages