import React, { createContext, useEffect, useState, useCallback, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Auth from './views/Auth/Auth'
import { getUser } from './services/ApiService/User.service'
import { getChatList, IChatForChatList } from './services/ApiService/Chat.service'
import { IMessage } from './services/ApiService/Message.service'
import ModalContacts from './components/ModalContacts/ModalContacts'
import ModalContactsProvider from './components/ModalContacts/ModalContactsProvider'
import ModalAddContactProvider from './components/ModalAddContact/ModalAddContactContext'

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
        setChats(chats)
      })
  }, [user])
  // console.log(1234)

  return (
    <UserContext.Provider value={user}>
      <ChatsContext.Provider value={chats}>
        <MessagesContext.Provider value={{chatMessages, setChatMessages}}>
          <ModalContactsProvider>
            <ModalAddContactProvider>
              <Routes>
                <Route path="/" element={<Layout/>}>
                  <Route path=":chatRoute" element={<></>}/>
                </Route>
                <Route path="/auth" element={<Auth/>}/>
              </Routes>
            </ModalAddContactProvider>
          </ModalContactsProvider>
        </MessagesContext.Provider>
      </ChatsContext.Provider>
    </UserContext.Provider>
  )
}

export default App
