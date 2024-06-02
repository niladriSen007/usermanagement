"use server"

import { connection } from "@/database/connection"
import { UserModel } from "@/models/UserModel"

export async function addNewUserActions(formData) {
  await connection()
  try {
    const newUser = new UserModel(formData)
    await newUser.save()
    return {
      message: "User added successfully",
      status: 201,
      success: true,
    }
  } catch (error) {
    return {
      message: "Failed to add user",
      status: 500,
      success: false,
    }
  }
}

export async function getAllUsersActions() {
  await connection()
  try {
    const users = await UserModel.find()
    return {
      message: "Users fetched successfully",
      status: 200,
      success: true,
      data: users,
    }
  } catch (error) {
    return {
      message: "Failed to fetch users",
      status: 500,
      success: false,
    }
  }
}
