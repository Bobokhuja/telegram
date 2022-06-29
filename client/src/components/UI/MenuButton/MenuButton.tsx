import React, {ReactNode} from 'react'
import classes from './MenuButton.module.scss'

type IMenuButton = {
  text?: string
  onChange?: React.ChangeEventHandler
  children: ReactNode
}

function MenuButton({text, children}: IMenuButton) {

  return (
    <button className={classes.MenuButton}>
      {children}
      {text && <span className={classes.Text}>{text}</span>}
    </button>
  )
}

export default MenuButton