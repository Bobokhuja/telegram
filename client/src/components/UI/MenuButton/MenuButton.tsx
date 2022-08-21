import React, { ReactNode } from 'react'
import classes from './MenuButton.module.scss'

type IMenuButton = {
  text?: string
  onChange?: React.ChangeEventHandler
  children: ReactNode
  onClick: any
}

export default function MenuButton({text, children, onClick}: IMenuButton) {

  return (
    <button className={classes.MenuButton} onClick={onClick}>
      {children}
      {text && <span className={classes.Text}>{text}</span>}
    </button>
  )
}