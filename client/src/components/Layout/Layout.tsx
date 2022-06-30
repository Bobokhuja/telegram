import React, { ChangeEvent, ChangeEventHandler, createContext, useContext, useEffect, useState } from 'react'
import classes from './Layout.module.scss'
import Menu from './Menu/Menu'
import ChatList from './ChatList/ChatList'
import SearchInput from '../UI/SearchInput/SearchInput'
import Messages from './Messages/Messages'
import bg from '../../assets/bg-messages.jpg'
import { IChat } from '../../services/ApiService/Chat.service'
import { useNavigate, useParams } from 'react-router-dom'
import { IMessage, setMessage } from '../../services/ApiService/Message.service'
import { checkChat } from '../../services/ApiService/Chat.service'
import { getChatList } from '../../services/ApiService/Chat.service'
import { getMessage } from '../../services/ApiService/Message.service'
import { UserContext } from '../../App'

//contexts
export const ChatContext = createContext<IChat | undefined>({} as IChat)
export const MessagesContext = createContext<IMessage[] | []>([] as IMessage[])

function Layout() {
  //Hook
  //States
  const [search, setSearch] = useState<string>('')
  const [chatMessages, setChatMessages] = useState<IMessage[]>([])
  // const [chats, setChats] = useState<IDataChat[]>([])
  const [chats, setChats] = useState<any>([])
  const {chatRoute} = useParams<string>()
  const user = useContext(UserContext)
  const navigate = useNavigate()
  const currentChat: IChat | undefined = chats.find((chat: any) => chat.address === chatRoute)
  //Hook
  //effects
  useEffect(() => {
    (async function () {
      const chats = await getChatList(user.id)
      const messages = await getMessage('1')
      setChatMessages(messages)
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
      <ChatContext.Provider value={currentChat}>
        <MessagesContext.Provider value={chatMessages}>
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
          {/*<div className={classes.Right} style={{backgroundImage: `url('${bg}')`}}>*/}
          {/*  <Messages*/}
          {/*    chatMessages={chatMessages}*/}
          {/*    setChatMessages={setChatMessages}*/}
          {/*  />*/}
          {/*</div>*/}
        </MessagesContext.Provider>
      </ChatContext.Provider>
    </div>
  )
}

export default Layout