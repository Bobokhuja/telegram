import React, {ChangeEvent, ChangeEventHandler, createContext, useEffect, useState} from 'react'
import classes from './Layout.module.scss'
import Menu from './Menu/Menu'
import ChatList from './ChatList/ChatList'
import SearchInput from '../UI/SearchInput/SearchInput'
import Messages from './Messages/Messages'
import bg from '../../assets/bg-messages.jpg'
import users, {IUsers} from '../../data/users'
import chatList, {IChatList} from '../../data/chatList'
import {useParams} from 'react-router-dom'
import messages, {IMessages} from '../../data/messages'

export const UserContext = createContext<IUsers>({} as IUsers)
export const ChatContext = createContext('')
export const MessagesContext = createContext({})

interface ILayout {
  children?: React.ReactNode
}

function getNewDataChats() {
  return chatList.map((chat, index) => {
    let lastMessage = messages.getLastMessage(chat.id)
    let date
    let text = 'no messages'
    let sender = users.find(user => {
      if (lastMessage) {
        date = lastMessage.date
        text = lastMessage.message
        date = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
        if (user.id === lastMessage.userId) return true
      }
    })

    return {
      id: chat.id,
      title: chat.name,
      text,
      sender: sender && sender!.name,
      address: chat.chatName,
      date
    }
  })
}

function Layout({children}: ILayout) {
  const [search, setSearch] = useState<string>('')
  const [chatMessages, setChatMessages] = useState<IMessages[]>([])
  const [chats, setChats] = useState(getNewDataChats())
  const {chat} = useParams()
  const currentChat: any = chatList.find((chatItem) => chatItem.chatName === chat)

  const onChangeHandler: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    setChats(getNewDataChats())
  }, [chatMessages])

  return (
    <div className={classes.Layout}>
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