import React, {ChangeEventHandler} from 'react'
import classes from './InputMessage.module.scss'

type IInputMessage = {
  value: string
  onChange: ChangeEventHandler
  customClass?: string
  onKeyPressHandler?:  React.KeyboardEventHandler<HTMLInputElement>
}

function InputMessage({value, onChange, customClass, onKeyPressHandler}: IInputMessage) {
  const htmlFor: string = `inputMessage`

  const cls = [
    classes.InputMessage,
    customClass && customClass
  ]

  return (
    <div className={cls.join(' ')}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        id={htmlFor}
        onKeyPress={onKeyPressHandler}
      />
      <label htmlFor={htmlFor}>Write a message</label>
    </div>
  )
}

export default InputMessage