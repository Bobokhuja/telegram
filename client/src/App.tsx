import React, { createContext, useContext, useEffect, useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Auth from './views/Auth/Auth'
import { getUser } from './services/ApiService/User.service'
import { getChatList, IChatForChatList } from './services/ApiService/Chat.service'
import { getMessage, IMessage } from './services/ApiService/Message.service'
import messages from './components/Layout/Messages/Messages'

export const UserContext = createContext<any>({})
export const ChatsContext = createContext<IChatForChatList[] | []>([])
export const ChatContext = createContext<IChatForChatList | undefined>({} as IChatForChatList)
export const MessagesContext = createContext<any>({chatMessages: [], setChatMessages: () => void {}})


function App() {
  const [user, setUser] = useState({
    id: undefined
  })
  const [chats, setChats] = useState<IChatForChatList[] | []>([])
  const [chatMessages, setChatMessages] = useState<IMessage[]>([])
  const [currentChat, setCurrentChat] = useState<any>({} as IChatForChatList)
  const {chatRoute} = useParams()

  useEffect(() => {
    getUser('1')
      .then(user => {
        setUser(user)
      })
  }, [])


  useEffect(() => {
    if (user.id) {
      getChatList(user.id)
        .then(chats => {
          console.log(chats)
          const transformChats = chats.map((chat: any) => {
            // console.log(chat)
            let date
            if (chat.lastMessage) {
              const messageDate = new Date(chat.lastMessage && chat.lastMessage.date)
              date = messageDate.getDate() === new Date().getDate()
                ? messageDate.toLocaleTimeString().slice(0, -3)
                : messageDate.toLocaleDateString()
            }
            // console.log(date)
            return {
              ...chat,
              lastMessage: {
                ...chat.lastMessage,
                date
              }
            }
          })
          setChats(transformChats)
        })
    }
  }, [user])
  // console.log(3)

  return (
    <UserContext.Provider value={user}>
      <ChatsContext.Provider value={chats}>
        <ChatContext.Provider value={currentChat}>
          <MessagesContext.Provider value={{chatMessages, setChatMessages}}>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route path=":chatRoute" element={<></>}/>
              </Route>
              <Route path="/auth" element={<Auth/>}/>
            </Routes>
          </MessagesContext.Provider>
        </ChatContext.Provider>
      </ChatsContext.Provider>
    </UserContext.Provider>
  )
}

export default App
