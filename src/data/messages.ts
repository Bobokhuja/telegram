export type IMessages = {
  id?: string
  chatId: string
  userId: string
  message: string
  date: Date
}

function messages(): any {
  const messages: IMessages[] = [
    {
      id: '1',
      chatId: '1',
      userId: '2',
      message: 'Салом',
      date: new Date(2022, 5, 21, 7, 50, 10, 0)
    },
    {
      id: '2',
      chatId: '1',
      userId: '1',
      message: 'Воалейкум салом',
      date: new Date(2022, 5, 21, 8, 1, 0, 0)
    },
    {
      id: '3',
      chatId: '1',
      userId: '1',
      message: 'Чхел Шумо',
      date: new Date(2022, 5, 21, 8, 1, 0, 0)
    },
    {
      id: '4',
      chatId: '1',
      userId: '2',
      message: 'Мешад соз. Чува намеби?',
      date: new Date(2022, 5, 21, 8, 1, 0, 0)
    }
  ]

  return {
    getMessages(): IMessages[] {
      return messages
    },
    getMessage(chatId: string): any {
      return messages
        .filter((message: IMessages) => chatId === message.chatId)
        .sort((a, b): any => (a.date.getTime() > b.date.getTime() ? 1 : -1))
    },
    setMessage(message: IMessages) {
      const id = (Math.max(...messages.map(message => +message.id!)) + 1).toString()

      messages.unshift({
        id,
        ...message
      })
    }
  }
}

export default messages()