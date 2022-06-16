import React from 'react'
import {Outlet} from 'react-router-dom'
import classes from './Layout.module.scss'
import Menu from './Menu/Menu'


interface ILayout {
  children?: React.ReactNode
}

function Layout({children}: ILayout) {

  return (
    <div className={classes.Layout}>
      <div className={classes.Left}>
        <Menu />

      </div>
      <Outlet/>
    </div>
  )
}

export default Layout