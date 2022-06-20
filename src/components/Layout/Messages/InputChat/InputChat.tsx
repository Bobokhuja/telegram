import React, {ChangeEvent, ChangeEventHandler, useState} from 'react'
import classes from './InputChat.module.scss'
import InputMessage from '../../../UI/InputMessage/InputMessage'
import InputSelectFile from '../../../UI/InputSelectFile/InputSelectFile'

interface IInputChat {

}

function InputChat({}: IInputChat) {
  const [textMessage, setTextMessage] = useState<string>('')

  const onChangeInput: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTextMessage(event.target.value)
  }

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
          <button className={classes.Send}>
            <span className="material-symbols-outlined">send</span>
          </button>
        )
      }



    </div>
  )
}

export default InputChat