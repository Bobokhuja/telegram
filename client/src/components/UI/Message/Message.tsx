import React from 'react'
import classes from './Message.module.scss'

type IMessage = {
  message: string
  isYour: boolean
  date: string
}

export default function Message({message, isYour, date}: IMessage) {
  const cls = [
    classes.Message,
    isYour ? classes.YourMessage : classes.HisMessage
  ]

  return (
    <div className={cls.join(' ')}>
      <svg viewBox="0 0 9 20" width="9" height="20" className={classes.MessageTailFilled}>
        <g transform="translate(9 -14)" fill="inherit" fillRule="evenodd">
          <path d="M-6 16h6v17c-.193-2.84-.876-5.767-2.05-8.782-.904-2.325-2.446-4.485-4.625-6.48A1 1 0 01-6 16z"
                transform="matrix(1 0 0 -1 0 49)" id="corner-fill" fill="inherit"></path>
        </g>
      </svg>
      <p>
        <span className={classes.TextMessage}>{message}</span>
        <span className={classes.Date}>{date}</span>
      </p>
    </div>
  )
}