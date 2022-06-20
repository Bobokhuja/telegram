import React, {ChangeEvent, ChangeEventHandler, useState} from 'react'
import classes from './Layout.module.scss'
import Menu from './Menu/Menu'
import ChatList from './ChatList/ChatList'
import SearchInput from '../UI/SearchInput/SearchInput'
import Messages from './Messages/Messages'
import bg from '../../assets/bg-messages.jpg'

interface ILayout {
  children?: React.ReactNode
}

function Layout({children}: ILayout) {
  const [search, setSearch] = useState<string>('')

  const onChangeHandler: ChangeEventHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <div className={classes.Layout}>
      <div className={classes.Left}>
        <Menu />
        <div className={classes.ChatAndSearch}>
          <SearchInput
            type="search"
            value={search}
            onChange={onChangeHandler}
            placeholder="Search"
          />
          <ChatList />
        </div>

      </div>
      <div className={classes.Right} style={{backgroundImage: `url('${bg}')`}}>
        <Messages />
      </div>
    </div>
  )
}

export default Layout