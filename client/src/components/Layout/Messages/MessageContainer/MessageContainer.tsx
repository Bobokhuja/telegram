import React, {useEffect, useState, useContext, ChangeEventHandler, ChangeEvent} from 'react'
import classes from './MessageContainer.module.scss'
import Message from '../../../UI/Message/Message'
import {IUser} from '../../../../data/users'
import {useParams} from 'react-router-dom'
import {UserContext} from '../../Layout'

function MessageContainer({stateMessages, divRef}: any) {
  const user = useContext<IUser>(UserContext)
  const {chat} = useParams()

  useEffect(() => {
    // @ts-ignore
    divRef.current!.scrollTop = divRef.current!.scrollHeight + divRef.current!.scrollHeight
  }, [stateMessages])

  return (
    <div className={classes.MessageContainer} ref={divRef}>
      <div className={classes.Wrap}>
        {
          stateMessages.map((message: any) => {
            return (
              <Message
                key={message.id}
                message={message.message}
                isYour={user.id === message.userId}
                date={message.date.toLocaleTimeString().slice(0, -3)}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default MessageContainer