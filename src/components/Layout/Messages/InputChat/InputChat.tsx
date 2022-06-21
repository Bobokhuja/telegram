import React, {ChangeEvent, ChangeEventHandler, MouseEventHandler, useState, useContext} from 'react'
import classes from './InputChat.module.scss'
import InputMessage from '../../../UI/InputMessage/InputMessage'
import InputSelectFile from '../../../UI/InputSelectFile/InputSelectFile'
import messages from '../../../../data/messages'
import {ChatContext} from '../../Layout'
import {UserContext} from '../../Layout'
import {IChatList} from '../../../../data/chatList'
import Users from '../../../../data/users'


interface IInputChat {
  onChangeInput: any
  textMessage: string
  onSendMessageHandler: any
}

function InputChat({onChangeInput, textMessage, onSendMessageHandler}: IInputChat) {

  const currentChat: any = useContext(ChatContext)

  const currentMessages = messages.getMessage(currentChat!.id)

  return (
    <div className={classes.InputChat}>
      <InputSelectFile

      />
      <InputMessage
        value={textMessage}
        onChange={onChangeInput}
        customClass={classes.InputText}
      />

      {
        textMessage && (
          <button
            className={classes.Send}
            onClick={onSendMessageHandler}
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        )
      }



    </div>
  )
}

export default InputChat