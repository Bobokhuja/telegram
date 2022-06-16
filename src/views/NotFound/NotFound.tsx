import React, {useEffect} from 'react'
import ReactRouter, {useNavigate} from 'react-router-dom'

function NotFound() {
  const navigate: ReactRouter.NavigateFunction = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [])

  return (<h1>Go to home</h1>)
}

export default NotFound