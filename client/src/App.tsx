import React, { createContext, useContext, useEffect, useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Auth from './views/Auth/Auth'
import { getUser } from './services/ApiService/User.service'
import { getChatList, IChatForChatList } from './services/ApiService/Chat.service'
import { getMessage, IMessage } from './services/ApiService/Message.service'

export const UserContext = createContext<any>({})
export const ChatsContext = createContext<IChatForChatList[] | []>([])
export const ChatContext = createContext<IChatForChatList | undefined>({} as IChatForChatList)
export const MessagesContext = createContext<any>({chatMessages: [], setChatMessages: () => void {}})


function App() {
  const [user, setUser] = useState({})
  const [chats, setChats] = useState<IChatForChatList[] | []>([])
  const [chatMessages, setChatMessages] = useState<IMessage[]>([])
  const [currentChat, setCurrentChat] = useState<any>({} as IChatForChatList)
  const {chatRoute} = useParams()

  useEffect(() => {
    (async function () {
      const userData = await getUser('1')
      const fetchChats: any = await getChatList(userData.id)
      setUser(userData)
      setChats(prevState => {
        return fetchChats.map((chat: any) => {
          const date = new Date(chat.lastMessage.date)
          return {
            ...chat,
            lastMessage: {
              ...chat.lastMessage,
              date: date.getDate() === new Date().getDate() ? date.toLocaleTimeString().slice(0, -3) : date.toLocaleDateString()
            }
          }
        })
      })
    })()
  }, [chatRoute])

  // useEffect(() => {
  //   (async function () {
  //     if (currentChat) {
  //       const messages = await getMessage(currentChat.id)
  //       setChatMessages(messages)
  //     }
  //   })()
  // }, [currentChat, chats])
  //
  // useEffect(() => {
  //   const currentChat = chats.find((chat: IChatForChatList) => chat.participant.username === chatRoute)
  //   setCurrentChat(currentChat)
  //   console.log(chatRoute)
  // }, [chats, chatRoute])

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
