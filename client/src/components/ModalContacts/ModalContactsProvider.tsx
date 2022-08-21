import { createContext, ReactNode, useState } from 'react'

export const ModalContactsContext = createContext<any>(null)

export default function ModalContactsProvider({children}: {children: ReactNode}) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <ModalContactsContext.Provider value={{isOpen, setIsOpen}}>
      {children}
    </ModalContactsContext.Provider>
  )
}