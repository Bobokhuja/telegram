import React from 'react'
import classes from './Menu.module.scss'

function Menu() {

  return (
    <div className={classes.Menu}>
      <div className={classes.Wrapper}>
        <ul className={classes.List}>
          <li>
            <button>Burger</button>
          </li>
          <li>
            <button>All chats</button>
          </li>
          <li>
            <button>users</button>
          </li>
          <li>
            <button>new message</button>
          </li>
          <li>
            <button>Edit</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu