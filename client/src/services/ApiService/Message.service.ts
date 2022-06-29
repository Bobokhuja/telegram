export type IMessage = {
  id?: string
  chatId: string
  userId: string
  message: string
  date: Date
}

function nextMessageId(messages: IMessage[]): string {
  return messages.length
    ? '1'
    : (Math.max(...messages.map(message => +message.id!)) + 1).toString()
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
    getLastMessage(chatId: string): IMessage | undefined {
      return sortMessageByDateTime(messages.filter((message: IMessage) => chatId === message.chatId)).pop()
    }
  }
}

export default messages()