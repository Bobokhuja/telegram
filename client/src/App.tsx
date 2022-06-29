import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Auth from './views/Auth/Auth'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path=":chat" element={<></>} />
      </Route>
      <Route path="/auth" element={<Auth/>}/>
    </Routes>
  )
}

export default App
