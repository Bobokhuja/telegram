import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Auth from './views/Auth/Auth'
import Chat from './views/Chat/Chat'
import CategoryChats from './views/CategoryChats/CategoryChats'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/?chattype=all" element={<CategoryChats category="all" />} />
        <Route path="?chattype=personal" element={<CategoryChats category="personal" />} />
        <Route path="?chattype=new" element={<CategoryChats category="new" />} />
        <Route path=":chat" element={<Chat />} />
      </Route>
      <Route path="/auth" element={<Auth/>}/>
    </Routes>
  )
}

export default App
