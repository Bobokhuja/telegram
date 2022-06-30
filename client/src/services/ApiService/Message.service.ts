export type IMessage = {
  id?: string
  chatId: string
  userId: string
  message: string
  date: Date
}

function sortMessageByDateTime(messages: IMessage[]) {
  return messages.sort((a, b): number => (a.date.getTime() > b.date.getTime() ? 1 : -1))
}

function messages(): any {

  return {
    async getMessage(chatId: string): Promise<IMessage[]> {
      const response = await fetch(`http://192.168.0.100:8080/messages/${chatId}`)
      return response.json()
    },
    setMessage(message: IMessage) {
      // messages.unshift({
      //   id: nextMessageId(messages),
      //   ...message
      // })
      // update(messages)
    },
    async getLastMessage(chatId: string): Promise<IMessage> {
      const response = await fetch(`http://192.168.0.100:8080/messages/last-message/${chatId}`)
      return response.json()
    }
  }
}

export default messages()