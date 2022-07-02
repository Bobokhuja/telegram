import React from 'react'
import classes from './Menu.module.scss'
import MenuButton from '../../UI/MenuButton/MenuButton'

function Menu() {

  const cls: string[] = [
    'material-symbols-outlined',
    classes.Icon
  ]

  return (
    <div className={classes.Menu}>
      <div className={classes.Wrapper}>
        <ul className={classes.List}>
          <li>
            <MenuButton>
              <span className={cls.join(' ')}>menu</span>
            </MenuButton>
          </li>
          <li>
            <MenuButton text="All chats">
              <span className={cls.join(' ')}>forum</span>
            </MenuButton>
          </li>
          <li>
            <MenuButton text="Users">
              <span className={cls.join(' ')}>account_circle</span>
            </MenuButton>
          </li>
          <li>
            <MenuButton text="New">
              <span className={cls.join(' ')}>chat</span>
            </MenuButton>
          </li>
          <li>
            <MenuButton text="Edit">
              <span className={cls.join(' ')}>tune</span>
            </MenuButton>
          </li>
          <li>
            <MenuButton text="Add chat">
              <span className={cls.join(' ')}>contacts</span>
            </MenuButton>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu