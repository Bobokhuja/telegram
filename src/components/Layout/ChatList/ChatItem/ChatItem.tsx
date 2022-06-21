import React, {MouseEventHandler} from 'react'
import {Link, useParams} from 'react-router-dom'
import classes from './ChatItem.module.scss'
import reactIcon from '../../../../assets/logo-og.png'

interface IChatItem {
  title: string,
  address: string
  text: string
  sender?: string
  date: string
  onClick: any
}

function ChatItem({title, text, date, sender, onClick, address}: IChatItem) {

  const cls: string[] = [classes.ChatItem]

  const {chat} = useParams()
  if (chat === address) cls.push(classes.Active)

  return (
    <Link to={`/${address}`}>
      <div className={cls.join(' ')} onClick={onClick}>
        <div className={classes.ChatLeft}>
          <img className={classes.ChatImg} src={reactIcon} alt="" />
        </div>
        <div className={classes.ChatCenter}>
          <p className={classes.Title}>{title}</p>
          <p className={classes.Text}>
            {sender && <span className={classes.sender}>{sender}:</span>}
            {text}
          </p>
        </div>
        <div className={classes.ChatRight}>
          <p className={classes.Date}>{date}</p>
          <span className={`${classes.pin} material-symbols-outlined`}>push_pin</span>
        </div>
      </div>
    </Link>
  )
}

export default ChatItem