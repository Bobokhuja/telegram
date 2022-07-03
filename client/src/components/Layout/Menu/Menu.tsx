import React from 'react'
import classes from './Menu.module.scss'
import MenuItem from './MenuItem/MenuItem'

export default function Menu() {

  const menuList = [
    {iconType: 'menu', text: ''},
    {iconType: 'forum', text: 'All chats'},
    {iconType: 'account_circle', text: 'Users'},
    {iconType: 'chat', text: 'New'},
    {iconType: 'tune', text: 'Edit'},
    {iconType: 'contacts', text: 'Add chat'}
  ]

  return (
    <div className={classes.Menu}>
      <div className={classes.Wrapper}>
        <ul className={classes.List}>
          {
            menuList.map(({iconType, text}) => (
              <MenuItem
                key={text}
                iconName={iconType}
                text={text}
              />
            ))
          }
        </ul>
      </div>
    </div>
  )
}