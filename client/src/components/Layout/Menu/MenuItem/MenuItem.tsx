import MenuButton from '../../../UI/MenuButton/MenuButton'
import React from 'react'
import classes from './MenuItem.module.scss'

type IMenuItem = {
  iconName: string
  text: string
}

export default function MenuItem({iconName, text}: IMenuItem) {
  const cls: string[] = [
    'material-symbols-outlined',
    classes.Icon
  ]
  return (
    <li>
      <MenuButton text={text}>
        <span className={cls.join(' ')}>{iconName}</span>
      </MenuButton>
    </li>
  )
}