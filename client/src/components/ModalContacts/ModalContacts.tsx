import React, { createContext, useContext, useEffect, useState } from 'react'
import classes from './ModalContacts.module.scss'
import { ModalContactsContext } from './ModalContactsProvider'
import Backdrop from '../UI/Backdrop/Backdrop'
import { serverIp } from '../../utils/server'
import { UserContext } from '../../App'
import ContactItem from './ContactItem/ContactItem'
import AddContactButton from '../UI/AddContactButton/AddContactButton'
import { ModalAddContactContext } from '../ModalAddContact/ModalAddContactContext'
import ModalAddContact from '../ModalAddContact/ModalAddContact'

export default function ModalContacts() {
  const {isOpen, setIsOpen} = useContext(ModalContactsContext)
  const modalAddContact = useContext(ModalAddContactContext)
  const user = useContext(UserContext)
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch(`${serverIp}/users/contacts/${user.id}`)
      .then(response => response.json())
      .then(contacts => {
        setContacts(contacts)
      })
  }, [isOpen])

  if (!isOpen) return null

  const closeModalHandler = () => {
    setIsOpen(false)
  }

  const openModalAddContactHandler = () => {
    modalAddContact.setIsOpen(true)
    console.log(modalAddContact)
  }

  return (
    <>
      <Backdrop onClick={closeModalHandler} />
      <ModalAddContact />
      <div className={classes.ModalContact}>
        <AddContactButton onClick={openModalAddContactHandler} />
        <ul className={classes.List}>
          {
            contacts.map(({name, username, avatar}: any) => (
              <ContactItem
                key={username}
                avatar={avatar}
                name={name}
                username={username}
                closeModalHandler={closeModalHandler}
              />
            ))
          }
        </ul>
      </div>
    </>
  )
}