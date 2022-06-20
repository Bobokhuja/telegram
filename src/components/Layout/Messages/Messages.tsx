import React from 'react'
import classes from './Messages.module.scss'
import Header from './Header/Header'

function Messages() {

  return (
    <div className={classes.Messages}>
      <Header
        title="ReactJS"
      />
    </div>
  )
}

export default Messages