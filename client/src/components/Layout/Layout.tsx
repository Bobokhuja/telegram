import React, {ChangeEvent, ChangeEventHandler, createContext, useEffect, useState} from 'react'
import classes from './Layout.module.scss'
import Menu from './Menu/Menu'
import ChatList from './ChatList/ChatList'
import SearchInput from '../UI/SearchInput/SearchInput'
import Messages from './Messages/Messages'
import bg from '../../assets/bg-messages.jpg'
import users, {IUser} from '../../data/users'
import chatList, {IChat} from '../../data/chatList'
import {useNavigate, useParams} from 'react-router-dom'
import {IMessage} from '../../data/messages'
import checkChat from '../../utils/checkChat'
import {IDataChat} from '../../data/chatList'
import {getNewDataChats} from '../../data/chatList'

//contexts
export const UserContext = createContext({} as IUser)
export const ChatContext = createContext({} as IChat)

function Layout() {
  //Hook
  //States
  const [search, setSearch] = useState<string>('')
  const [chatMessages, setChatMessages] = useState<IMessage[]>([])
  const [chats, setChats] = useState<IDataChat[]>(getNewDataChats())
  const {chat} = useParams<string>()
  const navigate = useNavigate()
  const currentChat: IChat | undefined = chatList.find((chatItem) => chatItem.chatName === chat)!

  //Hook
  //effects
  useEffect(() => {
    setChats(getNewDataChats())
  }, [chatMessages])

  useEffect(() => {
    if (!checkChat(chat!)) navigate('/')
  }, [chat])

  const onChangeHandler: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <div className={classes.Layout}>
      {/*<ModalContact />*/}
      <UserContext.Provider value={users[0]}>
        <ChatContext.Provider value={currentChat}>
          <div className={classes.Left}>
            <Menu/>
            <div className={classes.ChatAndSearch}>
              <SearchInput
                type="search"
                value={search}
                onChange={onChangeHandler}
                placeholder="Search"
              />
              <ChatList
                dataChats={chats}
              />
            </div>
          </div>
          <div className={classes.Right} style={{backgroundImage: `url('${bg}')`}}>
            <Messages
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        </ChatContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default Layout