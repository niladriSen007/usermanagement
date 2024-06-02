"use client"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { NewUserFormControls, UserInitialState } from "@/utils"
import { useState } from "react"
import { addNewUserActions } from "@/actions/actions"
import { set } from "mongoose"

const AddUserBtn = () => {
  const formContols = []
  const [newUserFormData, setNewUserFormData] = useState(UserInitialState)
  

  const handleSubmit = async() => {
    const result = await addNewUserActions(newUserFormData)
    setNewUserFormData(UserInitialState)
    console.log(result)
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add user</Button>
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
