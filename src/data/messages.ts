interface IMessages {
  id: string
  chatId: string
  userId: string
  message: string
  date: Date
}

const messages: Array<IMessages> = [
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
  }
]

export default messages