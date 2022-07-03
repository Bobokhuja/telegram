import React from 'react'
import classes from './InputChat.module.scss'
import InputMessage from '../../../UI/InputMessage/InputMessage'
import InputSelectFile from '../../../UI/InputSelectFile/InputSelectFile'

type IInputChat = {
  onSendMessageHandler: any
  textMessage: string
  onChangeInput: any
  onKeyPressHandler: any
  inputRef: any
}

export default function InputChat({
                     onSendMessageHandler,
                     textMessage,
                     onChangeInput,
                     onKeyPressHandler,
                     inputRef
                   }: IInputChat) {

  return (
    <div className={classes.InputChat}>
      <InputSelectFile

      />
      <InputMessage
        inputRef={inputRef}
        value={textMessage}
        onChange={onChangeInput}
        customClass={classes.InputText}
        onKeyPressHandler={onKeyPressHandler}
      />

      {
        textMessage && (
          <button
            className={classes.Send}
            onClick={onSendMessageHandler(textMessage)}
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        )
      }
    </div>
  )
}