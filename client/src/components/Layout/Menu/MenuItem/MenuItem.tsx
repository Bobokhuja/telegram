import MenuButton from '../../../UI/MenuButton/MenuButton'
import React from 'react'
import classes from './MenuItem.module.scss'

type IMenuItem = {
  iconName: string
  text: string
  onClick: any
}

export default function MenuItem({iconName, text, onClick}: IMenuItem) {
  const cls: string[] = [
    'material-symbols-outlined',
    classes.Icon
  ]
  return (
    <li>
      <MenuButton text={text} onClick={onClick}>
        <span className={cls.join(' ')}>{iconName}</span>
      </MenuButton>
    </li>
  )
}