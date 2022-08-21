import { createContext, ReactNode, useState } from 'react'

export const ModalAddContactContext = createContext<any>(null)

export default function ModalAddContactProvider({children}: {children: ReactNode}) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <ModalAddContactContext.Provider value={{isOpen, setIsOpen}}>
      {children}
    </ModalAddContactContext.Provider>
  )
}