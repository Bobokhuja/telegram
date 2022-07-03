import React, { ChangeEvent, ChangeEventHandler, createContext, useContext, useEffect, useState } from 'react'
import classes from './Layout.module.scss'
import Menu from './Menu/Menu'
import ChatList from './ChatList/ChatList'
import SearchInput from '../UI/SearchInput/SearchInput'
import Messages from './Messages/Messages'
import bg from '../../assets/bg-messages.jpg'
import { IChatForChatList } from '../../services/ApiService/Chat.service'
import { useNavigate, useParams } from 'react-router-dom'
import { checkChat } from '../../services/ApiService/Chat.service'
import { getMessage } from '../../services/ApiService/Message.service'
import { ChatsContext, MessagesContext, UserContext } from '../../App'

export const ChatContext = createContext<IChatForChatList | undefined>({} as IChatForChatList)

export default function Layout() {
  const [search, setSearch] = useState<string>('')
  const [currentChat, setCurrentChat] = useState<any>({} as IChatForChatList)

  const chats = useContext(ChatsContext)
  const user = useContext(UserContext)
  const {chatMessages, setChatMessages} = useContext(MessagesContext)

  const {chatRoute} = useParams<string>()
  const navigate = useNavigate()

  useEffect(() => {
    if (user.id) {
      checkChat(user.id, chatRoute)
        .then(res => {
          if (!res) navigate('/')
        })
    }
  }, [chatRoute, chats])

  useEffect(() => {
    if (currentChat) {
      getMessage(currentChat.id)
        .then(messages => setChatMessages(messages))
    }
  }, [currentChat])

  useEffect(() => {
    const currentChat = chats.find((chat: IChatForChatList) => chat.participant.username === chatRoute)
    setCurrentChat(currentChat)
  }, [chats, chatRoute])

  const onChangeHandler: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <div className={classes.Layout}>
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
            <ChatList/>
          </div>
        </div>
        <div className={classes.Right} style={{backgroundImage: `url('${bg}')`}}>
          <Messages
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />
        </div>
      </ChatContext.Provider>
    </div>
  )
}