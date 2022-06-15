import React from 'react'

interface ICategoryChats {
  category: string
}

function CategoryChats({category}: ICategoryChats) {
  return <div>Category Chats {category}</div>
}

export default CategoryChats