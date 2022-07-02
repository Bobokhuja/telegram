import React, { ChangeEvent, ChangeEventHandler, createContext, useContext, useEffect, useState } from 'react'
import classes from './Layout.module.scss'
import Menu from './Menu/Menu'
import ChatList from './ChatList/ChatList'
import SearchInput from '../UI/SearchInput/SearchInput'
import Messages from './Messages/Messages'
import bg from '../../assets/bg-messages.jpg'
import { getChatByUsername, IChat, IChatForChatList } from '../../services/ApiService/Chat.service'
import { useNavigate, useParams } from 'react-router-dom'
import { checkChat } from '../../services/ApiService/Chat.service'
import { getMessage } from '../../services/ApiService/Message.service'
import { ChatContext, ChatsContext, MessagesContext, UserContext } from '../../App'

//contexts
// export const ChatContext = createContext<IChatForChatList | undefined>({} as IChatForChatList)
// export const MessagesContext = createContext<IMessage[] | []>([] as IMessage[])

function Layout() {
  //Hook
  //States
  const [search, setSearch] = useState<string>('')
  // const [chatMessages, setChatMessages] = useState<IMessage[]>([])
  const chats = useContext(ChatsContext)
  const {chatRoute} = useParams<string>()
  const user = useContext(UserContext)
  const {chatMessages, setChatMessages} = useContext(MessagesContext)
  const navigate = useNavigate()
  // const currentChat: IChatForChatList | undefined = chats.find((chat: any) => chat.participant.username === chatRoute)
  const [currentChat, setCurrentChat] = useState<any>({} as IChatForChatList)
  //Hook
  //effects

  useEffect(() => {
    if (user.id) {
      checkChat(user.id, chatRoute)
        .then(res => {
          if (!res) navigate('/')
        })
    }
  }, [chatRoute, chats])

  useEffect(() => {
    (async function () {
      if (currentChat) {
        const messages = await getMessage(currentChat.id)
        // console.log(messages)
        setChatMessages(messages)
      }
    })()
  }, [currentChat])

  // console.info(1)

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
              <ChatList/>
            </div>
          </div>
          <div className={classes.Right} style={{backgroundImage: `url('${bg}')`}}>
            <Messages
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        </MessagesContext.Provider>
      </ChatContext.Provider>
    </div>
  )
}

export default Layout