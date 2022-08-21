import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import classes from './ChatItem.module.scss'
import reactIcon from '../../../../assets/logo-og.png'
import { UserContext } from '../../../../App'

interface IChatItem {
  avatar: string
  title: string,
  address: string
  text?: string
  sender?: string
  date?: string
  onClick?: any
}

export default function ChatItem({avatar, title, text, date, sender, onClick, address}: IChatItem) {
  const {chatRoute} = useParams()
  const user = useContext(UserContext)
  const cls: string[] = [
    classes.ChatItem,
    chatRoute === address ? classes.Active : ''
  ]

  let formatDate: any = date
  if (date) {
    formatDate = new Date(date)
    if (formatDate.getDate() === new Date().getDate()) formatDate = formatDate.toLocaleTimeString().slice(0, -3)
    else formatDate = formatDate.toLocaleDateString()
  }

  let formatSender = sender && (sender === user.name && 'You')

  return (
    <Link to={`/${address}`}>
      <div className={cls.join(' ')} onClick={onClick}>
        <div className={classes.ChatLeft}>
          <img className={classes.ChatImg} src={avatar} alt=""/>
        </div>
        <div className={classes.ChatCenter}>
          <p className={classes.Title}>{title}</p>
          <p className={classes.Text}>
            {sender && <span className={classes.sender}>{formatSender}:</span>}
            {text}
          </p>
        </div>
        <div className={classes.ChatRight}>
          <p className={classes.Date}>{formatDate}</p>
          <span className={`${classes.pin} material-symbols-outlined`}>push_pin</span>
        </div>
      </div>
    </Link>
  )
}