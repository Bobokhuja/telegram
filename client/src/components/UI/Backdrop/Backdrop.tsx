import React from 'react'
import classes from './Backdrop.module.scss'

interface IBackdrop {
  onClick?: () => void
  index?: number
}

function Backdrop({onClick, index}: IBackdrop) {
  return (
    <div style={{zIndex: index}} onClick={onClick} className={classes.Backdrop} />
  )
}

export default Backdrop