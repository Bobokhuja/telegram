import React from 'react'
import classes from './HeaderMessages.module.scss'

interface IHeaderMessages {
  title: string
  chatinfo: string
}

function HeaderMessages({title, chatinfo}: IHeaderMessages) {

  return (
    <header className={classes.HeaderMessages}>
      <div className={classes.Left}>
        <p className={classes.ChatName}>{title}</p>
        <p className={classes.ChatInfo}>{chatinfo}</p>
      </div>
      <div className={classes.Right}>

      </div>
    </header>
  )
}

export default HeaderMessages