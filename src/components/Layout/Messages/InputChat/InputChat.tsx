import React, {ChangeEvent, ChangeEventHandler, useState} from 'react'
import classes from './InputChat.module.scss'
import InputMessage from './InputMessage/InputMessage'

interface IInputChat {

}

function InputChat({}: IInputChat) {
  const [textMessage, setTextMessage] = useState<string>('')

  const onChangeInput: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTextMessage(event.target.value)
  }

  return (
    <div className={classes.InputChat}>
      <InputMessage
        value={textMessage}
        onChange={onChangeInput}
      />
      {/*<input type="file" />*/}
      {/*<input type="text" />*/}

    </div>
  )
}

export default InputChat