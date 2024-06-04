"use client"
import { UserProvider } from "@/context/userContext"

export const CommonLayout = ({children})=>{
  return (
    <UserProvider>
      {children}
    </UserProvider>
  )
}