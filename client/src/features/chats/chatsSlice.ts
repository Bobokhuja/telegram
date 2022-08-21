import { IChatForChatList } from '../../services/ApiService/Chat.service'
import { createSlice } from '@reduxjs/toolkit'

interface ChatsState {
  chats: IChatForChatList[]
}

const initialState: ChatsState = {
  chats: []
}

export const chatSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    loadChats: state => {

    }
  }
})