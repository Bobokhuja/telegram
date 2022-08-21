import React from 'react'
import { Link } from 'react-router-dom'
import classes from './ContactItem.module.scss'

interface IContactItem {
  name: string
  username: string
  closeModalHandler: () => void
  avatar: string
}

function ContactItem({avatar, name, username, closeModalHandler}: IContactItem) {
  return (
    <li>
      <Link to={`/${username}`}>
        <div className={classes.ContactItem} onClick={closeModalHandler}>
          <div className={classes.ContactAvatar}>
            <img className={classes.ContactImg} src={avatar} alt=""/>
          </div>
          <div className={classes.ContactCenter}>
            <p className={classes.Title}>{name}</p>
            <p className={classes.Text}>
              Hi
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default ContactItem