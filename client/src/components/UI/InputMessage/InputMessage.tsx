import React, { ChangeEventHandler } from 'react'
import classes from './InputMessage.module.scss'

type IInputMessage = {
  value: string
  onChange: ChangeEventHandler
  customClass?: string
  onKeyPressHandler?: React.KeyboardEventHandler<HTMLInputElement>
  inputRef: any
}

export default function InputMessage({
                                       value,
                                       onChange,
                                       customClass,
                                       onKeyPressHandler,
                                       inputRef
                                     }: IInputMessage) {
  const htmlFor: string = `inputMessage`

  const cls = [
    classes.InputMessage,
    customClass && customClass
  ]

  return (
    <div className={cls.join(' ')}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        id={htmlFor}
        onKeyUp={onKeyPressHandler}
      />
      <label htmlFor={htmlFor}>Write a message</label>
    </div>
  )
}