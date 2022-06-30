import React, { createContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Auth from './views/Auth/Auth'
import { getUser } from './services/ApiService/User.service'
import { getChatList, IChatForChatList } from './services/ApiService/Chat.service'

export const UserContext = createContext<any>({})
export const ChatsContext = createContext<IChatForChatList[] | []>([])


function App() {
  const [user, setUser] = useState({})
  const [chats, setChats] = useState<IChatForChatList[] | []>([])

  useEffect(() => {
    (async function () {
      const userData = await getUser('1')
      const fetchChats: any = await getChatList(userData.id)
      setUser(userData)
      setChats(fetchChats)
    })()
  }, [])

  return (
    <UserContext.Provider value={user}>
      <ChatsContext.Provider value={chats}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path=":chatRoute" element={<></>}/>
          </Route>
          <Route path="/auth" element={<Auth/>}/>
        </Routes>
      </ChatsContext.Provider>
    </UserContext.Provider>
  )
}

export default App
