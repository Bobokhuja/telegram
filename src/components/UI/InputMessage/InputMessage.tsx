import React, {ChangeEventHandler} from 'react'
import classes from './InputMessage.module.scss'

interface IInputMessage {
  value: string
  onChange: ChangeEventHandler
  customClass?: string
}

function InputMessage({value, onChange, customClass}: IInputMessage) {
  const htmlFor: string = Math.random().toString()

  const cls = [classes.InputMessage]
  if (customClass) cls.push(customClass)

  return (
    <div className={cls.join(' ')}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        id={htmlFor}
      />
      <label htmlFor={htmlFor}>Write a message</label>
    </div>
  )
}

export default InputMessage