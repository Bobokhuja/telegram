import React from 'react'
import {Outlet} from 'react-router-dom'

interface ILayout {
  children?: React.ReactNode
}

function Layout({children}: ILayout) {

  return (
    <div className="Layout">
      <Outlet/>
    </div>
  )
}

export default Layout