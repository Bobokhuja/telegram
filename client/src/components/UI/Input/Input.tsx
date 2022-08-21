import React, { ChangeEventHandler } from 'react'
import classes from './Input.module.scss'

interface IInput {
  onChange: ChangeEventHandler<HTMLInputElement>
  error?: string
}

function Input({onChange, error}: IInput) {
  return (
    <label className={classes.Label}>
      <span className={classes.Tip}>Please input username</span>
      <input
        className={classes.Input}
        type="text"
        onChange={onChange}
      />
      {error && <small>{error}</small>}
    </label>
  )
}

export default Input