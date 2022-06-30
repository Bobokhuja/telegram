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
import { checkChat } from '../../services/ApiService/Chat.service'
import {IDataChat} from '../../data/chatList'
import { getChatList } from '../../services/ApiService/Chat.service'

//contexts
export const UserContext = createContext({} as IUser)
export const ChatContext = createContext<IChat | undefined>({} as IChat)

function Layout() {
  //Hook
  //States
  const [search, setSearch] = useState<string>('')
  const [chatMessages, setChatMessages] = useState<IMessage[]>([])
  // const [chats, setChats] = useState<IDataChat[]>([])
  const [chats, setChats] = useState<any>([])
  const {chatRoute} = useParams<string>()
  const navigate = useNavigate()
  const currentChat: IChat | undefined = chats.find((chat: any) => chat.address === chatRoute)
  //Hook
  //effects
  useEffect(() => {
    (async function () {
      const chats = await getChatList('1')
      setChats(chats)
    })()
  }, [chatMessages])

  useEffect(() => {
    checkChat('1', chatRoute)
      .then(res => {
        if (res) navigate('/')
      })
  }, [chatRoute])

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