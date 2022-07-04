import React, { createContext, useEffect, useState, useCallback, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Auth from './views/Auth/Auth'
import { getUser } from './services/ApiService/User.service'
import { getChatList, IChatForChatList } from './services/ApiService/Chat.service'
import { IMessage } from './services/ApiService/Message.service'

export const UserContext = createContext<any>({})
export const ChatsContext = createContext<IChatForChatList[] | []>([])
export const MessagesContext = createContext<any>({chatMessages: [], setChatMessages: () => void {}})

window.addEventListener('load', function () {
  window.scrollTo(0, 0)
})
document.addEventListener('touchmove', function (e) {
  e.preventDefault()
})

function App() {
  const [user, setUser] = useState({id: undefined})
  const [chats, setChats] = useState<IChatForChatList[] | []>([])
  const [chatMessages, setChatMessages] = useState<IMessage[]>([])

  useEffect(() => {
    getUser('1')
      .then(user => setUser(user))
  }, [])

  useEffect((): void => {
    if (!user.id) return
    getChatList(user.id)
      .then(chats => {
        const transformChats = chats.map((chat: any) => {
          let date
          if (chat.lastMessage) {
            const messageDate = new Date(chat.lastMessage && chat.lastMessage.date)
            date = messageDate.getDate() === new Date().getDate()
              ? messageDate.toLocaleTimeString().slice(0, -3)
              : messageDate.toLocaleDateString()
          }
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
  }, [user])

  return (
    <UserContext.Provider value={user}>
      <ChatsContext.Provider value={chats}>
        <MessagesContext.Provider value={{chatMessages, setChatMessages}}>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path=":chatRoute" element={<></>}/>
            </Route>
            <Route path="/auth" element={<Auth/>}/>
          </Routes>
        </MessagesContext.Provider>
      </ChatsContext.Provider>
    </UserContext.Provider>
  )
}

export default App
