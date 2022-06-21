import React from 'react'
import classes from './InputChat.module.scss'
import InputMessage from '../../../UI/InputMessage/InputMessage'
import InputSelectFile from '../../../UI/InputSelectFile/InputSelectFile'


interface IInputChat {
  onSendMessageHandler: any
  textMessage: string
  onChangeInput: any
  onKeyPressHandler: any
}

function InputChat({onSendMessageHandler, textMessage, onChangeInput, onKeyPressHandler}: IInputChat) {

  return (
    <div className={classes.InputChat}>
      <InputSelectFile

      />
      <InputMessage
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

export default InputChat