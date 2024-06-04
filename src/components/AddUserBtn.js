"use client"
import { addNewUserActions } from "@/actions/actions"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { NewUserFormControls, UserInitialState } from "@/utils"
import { useContext, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { UserContext } from "@/context/userContext"

const AddUserBtn = () => {
  const formContols = []
  const { newUserFormData, setNewUserFormData } = useContext(UserContext)
  

  const handleSubmit = async() => {
    const result = await addNewUserActions(newUserFormData)
    setNewUserFormData(UserInitialState)
    console.log(result)
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button onClick={()=>{
            setNewUserFormData(UserInitialState)
          }}>Add user</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add user details</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <form action={handleSubmit} className="grid  items-center gap-6">
              {NewUserFormControls.map((control) => {
                return (
                  <div key={control.name}>
                    <Label htmlFor={control.name}>{control.label}</Label>
                    <Input
                      id={control.name}
                      name={control?.name}
                      placeholder={control.placeholder}
                      className="col-span-3 border-2 border-gray-300"
                      type={control.type}
                      value={newUserFormData[control.name]}
                      onChange={(e) =>
                        setNewUserFormData({
                          ...newUserFormData,
                          [control.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                )
              })}
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
export default AddUserBtn
