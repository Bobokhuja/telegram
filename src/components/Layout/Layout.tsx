import React, {ChangeEvent, ChangeEventHandler, useState} from 'react'
import classes from './Layout.module.scss'
import Menu from './Menu/Menu'
import ChatList from './ChatList/ChatList'
import SearchInput from '../UI/SearchInput/SearchInput'
import Messages from './Messages/Messages'
import bg from '../../assets/bg-messages.jpg'
import users, {IUsers} from '../../data/users'
import chatList, {IChatList} from '../../data/chatList'
import {useParams} from 'react-router-dom'
export const UserContext = React.createContext<IUsers>({} as IUsers)
export const ChatContext = React.createContext('')

interface ILayout {
  children?: React.ReactNode
}

function Layout({children}: ILayout) {
  const [search, setSearch] = useState<string>('')
  const {chat} = useParams()
  const currentChat: any = chatList.find((chatItem) => chatItem.chatName === chat)

  const onChangeHandler: ChangeEventHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <div className={classes.Layout}>
      <UserContext.Provider value={users[0]}>
        <ChatContext.Provider value={currentChat}>
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
        </ChatContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default Layout