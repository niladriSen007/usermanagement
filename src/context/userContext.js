"use client"
import { UserInitialState } from "@/utils"
import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [currentUserId, setCurrentUserId] = useState()
  const [newUserFormData, setNewUserFormData] = useState(UserInitialState)

  return (
    <UserContext.Provider value={{ currentUserId, setCurrentUserId,newUserFormData, setNewUserFormData }}>
      {children}
    </UserContext.Provider>
  )
}