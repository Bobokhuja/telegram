import React from 'react'
import classes from './Header.module.scss'

interface IHeader {
  title: string
}

function Header({title}: IHeader) {

  return (
    <header className={classes.Header}>
      <div className={classes.Left}>
        <p className={classes.AddressName}>
          {title}
        </p>

      </div>
      <div className={classes.Right}>

      </div>
    </header>
  )
}

export default Header