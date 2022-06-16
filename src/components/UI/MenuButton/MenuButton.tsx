import React, {DetailedHTMLProps, ImgHTMLAttributes} from 'react'
import classes from './MenuButton.module.scss'

interface IMenuButton {
  icon: React.ImgHTMLAttributes<T>.src?: string | undefined
  text?: string
}

function MenuButton({icon, text}: IMenuButton) {

  return (
    <button>
      <img src={icon} alt={text ? text : ''} />
    </button>
  )
}

export default MenuButton