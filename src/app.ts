import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes'

export const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

mongoose.connect('mongodb+srv://matheusobarboza:Tcheco8421248@cluster0.kjjzxaq.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Database connection Success')
  }).catch((err) => {
    console.log('error', err.message)
  })
