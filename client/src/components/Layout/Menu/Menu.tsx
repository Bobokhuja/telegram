import React, { useContext } from 'react'
import classes from './Menu.module.scss'
import MenuItem from './MenuItem/MenuItem'
import { ModalContactsContext } from '../../ModalContacts/ModalContactsProvider'

export default function Menu() {
  const {setIsOpen} = useContext(ModalContactsContext)

  const showContactHandler = () => {
    setIsOpen(true)
  }

  const menuList = [
    {iconType: 'menu', text: ''},
    {iconType: 'forum', text: 'All chats'},
    {iconType: 'account_circle', text: 'Users'},
    {iconType: 'chat', text: 'New'},
    {iconType: 'tune', text: 'Edit'},
    {iconType: 'contacts', text: 'Contacts', onClick: showContactHandler}
  ]

  return (
    <div className={classes.Menu}>
      <div className={classes.Wrapper}>
        <ul className={classes.List}>
          {
            menuList.map(({iconType, text, onClick}) => (
              <MenuItem
                key={text}
                iconName={iconType}
                text={text}
                onClick={onClick}
              />
            ))
          }
        </ul>
      </div>
    </div>
  )
}