import React from 'react'
import classes from './HeaderMessages.module.scss'

interface IHeaderMessages {
  title: string
  chatInfo: string
}

export default function HeaderMessages({title, chatInfo}: IHeaderMessages) {

  return (
    <header className={classes.HeaderMessages}>
      <div className={classes.Left}>
        <p className={classes.ChatName}>{title}</p>
        <p className={classes.ChatInfo}>{chatInfo}</p>
      </div>
      <div className={classes.Right}>

      </div>
    </header>
  )
}