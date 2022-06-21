import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Auth from './views/Auth/Auth'
import NotFound from './views/NotFound/NotFound'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path=":chat" element={<></>} />
      </Route>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
