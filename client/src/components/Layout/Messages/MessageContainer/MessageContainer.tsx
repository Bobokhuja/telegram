import React, { useEffect, useState, useContext, ChangeEventHandler, ChangeEvent } from 'react'
import classes from './MessageContainer.module.scss'
import Message from '../../../UI/Message/Message'
import { IUser } from '../../../../services/ApiService/User.service'
import { UserContext } from '../../../../App'

function MessageContainer({stateMessages, divRef}: any) {
  const user = useContext<IUser>(UserContext)

  console.log(stateMessages)
  useEffect(() => {
    // @ts-ignore
    divRef.current!.scrollTop = divRef.current!.scrollHeight + divRef.current!.scrollHeight
  }, [stateMessages])

  return (
    <div className={classes.MessageContainer} ref={divRef}>
      <div className={classes.Wrap}>
        {
          stateMessages.map((message: any) => {
            const date = new Date(message.date)
            return (
              <Message
                key={message.id}
                message={message.message}
                isYour={user.id === message.userId}
                date={date.toLocaleTimeString().slice(0, -3)}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default MessageContainer