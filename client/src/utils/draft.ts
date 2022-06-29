export function setDraft(chatId: string, message: string): void {
  let localDraftString: string | null = localStorage.getItem('drafts')
  if (!localDraftString) {
    localStorage.setItem('drafts', JSON.stringify({}))
    localDraftString = localStorage.getItem('drafts')
  }

  let localDraft = JSON.parse(localDraftString!)
  localStorage.setItem('drafts', JSON.stringify({
    ...localDraft,
    [chatId]: message
  }))
}

export function removeDraft(chatId: string): void {
  let localDraft: any = JSON.parse(localStorage.getItem('drafts')!)
  if (!localDraft) return
  if (localDraft[chatId]) delete localDraft[chatId]

  localStorage.setItem('drafts', JSON.stringify(localDraft))
}

export function getDraft(chatId: string): string {
  let localDraftString: string | null = localStorage.getItem('drafts')
  if (!localDraftString) return ''
  let localDraft: any = JSON.parse(localDraftString!)
  return localDraft[chatId] ? localDraft[chatId] : ''
}