import React, {ChangeEventHandler} from 'react'
import classes from './InputMessage.module.scss'

interface IInputMessage {
  value: string
  onChange: ChangeEventHandler
}

function InputMessage({value, onChange}: IInputMessage) {
  const htmlFor: string = Math.random().toString()

  return (
    <div className={classes.InputMessage}>
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