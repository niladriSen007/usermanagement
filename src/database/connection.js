import mongoose from 'mongoose'

export const connection = async () => {
  mongoose.connect('mongodb+srv://nil:nil@cluster0.pcssoy3.mongodb.net/').then(() => {
    console.log('Connected to database')
  }).catch((err) => {
    console.log('Error connecting to database', err)
  })
}