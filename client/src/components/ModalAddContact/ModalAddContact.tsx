import React, { ChangeEventHandler, useContext, useState } from 'react'
import Backdrop from '../UI/Backdrop/Backdrop'
import classes from './ModalAddContact.module.scss'
import { UserContext } from '../../App'
import { ModalAddContactContext } from './ModalAddContactContext'
import Input from '../UI/Input/Input'

function ModalAddContact() {
  const [username, setUsername] = useState<string>('')
  const {isOpen, setIsOpen} = useContext(ModalAddContactContext)
  const user = useContext(UserContext)
  const [contacts, setContacts] = useState([])
  console.log(isOpen)

  if (!isOpen) return null

  const closeModalHandler = () => {
    setIsOpen(false)
  }

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUsername(event.target.value)
  }

  return (
    <>
      <Backdrop onClick={closeModalHandler} index={5} />
      <div className={classes.ModalAddContact}>
        <Input onChange={onChangeHandler} />
      </div>
    </>
  )
}

export default ModalAddContact