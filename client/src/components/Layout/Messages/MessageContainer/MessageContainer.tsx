import React, { useEffect, useContext } from 'react'
import classes from './MessageContainer.module.scss'
import Message from '../../../UI/Message/Message'
import { IUser } from '../../../../services/ApiService/User.service'
import { UserContext } from '../../../../App'
import { IMessage } from '../../../../services/ApiService/Message.service'

type IMessageContainer = {
  stateMessages: IMessage[]
  divRef: {
    current: HTMLDivElement
  }
}

export default function MessageContainer({stateMessages, divRef}: IMessageContainer) {
  const user = useContext<IUser>(UserContext)

  useEffect(() => {
    const div: HTMLDivElement = divRef.current
    divRef.current.scrollTop = div.scrollHeight + div.scrollHeight
  }, [stateMessages])

  return (
    <div className={classes.MessageContainer} ref={divRef}>
      <div className={classes.Wrap}>
        {
          stateMessages.map((message: any) => (
              <Message
                key={message.id}
                message={message.message}
                isYour={user.id === message.senderId}
                date={new Date(message.date).toLocaleTimeString().slice(0, -3)}
              />
            )
          )
        }
      </div>
    </div>
  )
}