import React from 'react'
import classes from './AddContactButton.module.scss'

interface AddContactButton {
  onClick?: () => void
}

function AddContactButton({onClick}: AddContactButton) {
  return (
    <button
      className={classes.Button}
      onClick={onClick}
    >
      Add to Contacts
    </button>
  )
}

export default AddContactButton