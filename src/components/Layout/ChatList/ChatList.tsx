import React, {useState} from 'react'
import classes from './ChatList.module.scss'
import SearchInput from '../../UI/SearchInput/SearchInput'
import ChatItem from './ChatItem/ChatItem'

const dataChats = [
  {
    id: 1,
    title: 'ReactJS',
    text: 'Hello',
    sender: 'Ilmhona',
    date: '11:30',
    isActive: false,
    address: 'reactjs'
  },
  {
    id: 2,
    title: 'Книги для программистов',
    text: 'Hello World! this is a public',
    sender: '',
    date: 'Wed',
    isActive: false,
    address: 'booksofprogrammer'
  }
]

function ChatList() {

  const [chats, setChats] = useState(dataChats)

  const onClickHandler = (event: MouseEvent) => {

  }

  return (
    <div className={classes.ChatList}>
      <div className={classes.Wrapper}>
        {
          dataChats.map(chat => (
              <ChatItem
                key={chat.address}
                title={chat.title}
                text={chat.text}
                date={chat.date}
                onClick={onClickHandler}
                address={chat.address}
              />
            )
          )
        }
      </div>
    </div>
  )
}

export default ChatList