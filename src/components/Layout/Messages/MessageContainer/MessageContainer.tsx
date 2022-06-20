import React from 'react'
import classes from './MessageContainer.module.scss'
import Message from '../../../UI/Message/Message'

function MessageContainer() {
  return (
    <div className={classes.MessageContainer}>
      <div className={classes.Wrap}>
        <Message
          message="Hello"
          isYour={true}
        />
        <Message
          message="Hello"
          isYour={false}
        />
        <Message
          message="Hello"
          isYour={false}
        />
        <Message
          message="HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello"
          isYour={true}
        />
        <Message
          message="Hello HelloHelloHello HelloHelloH lloHelloHello HelloHelloH lloHelloH  elloHel oHelloHelloHelloHelloHelloHell oHello  HelloHelloHelloHelloHelloHello"
          isYour={true}
        />
        <Message
          message="Hello"
          isYour={true}
        />
        <Message
          message="Hello"
          isYour={false}
        />
        <Message
          message="Hello"
          isYour={false}
        />
        <Message
          message="HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello"
          isYour={true}
        />
        <Message
          message="Hello HelloHelloHello HelloHelloH lloHelloHello HelloHelloH lloHelloH  elloHel oHelloHelloHelloHelloHelloHell oHello  HelloHelloHelloHelloHelloHello"
          isYour={true}
        />
        <Message
          message="Hello"
          isYour={true}
        />
        <Message
          message="Hello"
          isYour={false}
        />
        <Message
          message="Hello"
          isYour={false}
        />
        <Message
          message="HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello"
          isYour={true}
        />
        <Message
          message="Hello HelloHelloHello HelloHelloH lloHelloHello HelloHelloH lloHelloH  elloHel oHelloHelloHelloHelloHelloHell oHello  HelloHelloHelloHelloHelloHello"
          isYour={true}
        />
        <Message
          message="Hello"
          isYour={true}
        />
        <Message
          message="Hello"
          isYour={false}
        />
        <Message
          message="Hello"
          isYour={false}
        />
        <Message
          message="HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello"
          isYour={true}
        />
        <Message
          message="Hello HelloHelloHello HelloHelloH lloHelloHello HelloHelloH lloHelloH  elloHel oHelloHelloHelloHelloHelloHell oHello  HelloHelloHelloHelloHelloHello"
          isYour={true}
        />
      </div>
    </div>
  )
}

export default MessageContainer