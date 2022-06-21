export type IMessage = {
  id?: string
  chatId: string
  userId: string
  message: string
  date: Date
}

const localMessagesString: string | null = localStorage.getItem('messages')
let localMessages: IMessage[] = []

if (localMessagesString) localMessages = JSON.parse(localMessagesString)
else localStorage.setItem('messages', JSON.stringify([]))

function update(messages: IMessage[]) {
  localStorage.setItem('messages', JSON.stringify(messages))
}
function nextMessageId(messages: IMessage[]): string {
  const id = messages.length ? '1' : (Math.max(...messages.map(message => +message.id!)) + 1).toString()
  if (messages.length === 0) {
    return '1'
  } else {
    return (Math.max(...messages.map(message => +message.id!)) + 1).toString()
  }
}
function sortMessageByDateTime(messages: IMessage[]) {
  return messages.sort((a, b): number => (a.date.getTime() > b.date.getTime() ? 1 : -1))
}

function messages(): any {
  const messages: IMessage[] = localMessages.map(chat => ({...chat, date: new Date(chat.date)}))

  return {
    getMessages(): IMessage[] {
      return messages
    },
    getMessage(chatId: string): IMessage[] {
      return sortMessageByDateTime(messages.filter((message: IMessage) => chatId === message.chatId))
    },
    setMessage(message: IMessage) {
      messages.unshift({
        id: nextMessageId(messages),
        ...message
      })
      update(messages)
    },
    getLastMessage(chatId: string): IMessage | undefined {
      return sortMessageByDateTime(messages.filter((message: IMessage) => chatId === message.chatId)).pop()
    }
  }
}

export default messages()