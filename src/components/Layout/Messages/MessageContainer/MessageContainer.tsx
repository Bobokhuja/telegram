import React, {useEffect, useState, useContext, ChangeEventHandler, ChangeEvent} from 'react'
import classes from './MessageContainer.module.scss'
import Message from '../../../UI/Message/Message'
import messages, {IMessages} from '../../../../data/messages'
import users, {IUsers} from '../../../../data/users'
import chatList from '../../../../data/chatList'
import {useParams} from 'react-router-dom'
import {UserContext} from '../../Layout'

function MessageContainer({stateMessages}: any) {
  const user = useContext<IUsers>(UserContext)
  const {chat} = useParams()

  return (
    <div className={classes.MessageContainer}>
      <div className={classes.Wrap}>
        {
          stateMessages.map((message: any) => {
            return (
              <Message
                key={message.id}
                message={message.message}
                isYour={user.id === message.userId}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default MessageContainer