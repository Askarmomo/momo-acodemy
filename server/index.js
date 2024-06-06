import express, { application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userModel from './schemas/LogInSchema.js'

const app = express()
dotenv.config()
app.use(cors()) 
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL)

app.post('/register', async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password } = req.body

    try {
        const result = await userModel.create({ firstName, lastName, email, phoneNumber, password })

        if (result) {
            res.json({ message: 'Your Account Created Successfully' })
        } else {
            res.json({ message: 'Something Is Wrong' })
        }

    } catch (error) {
        res.json({ message: `register:-${error.message}` })
    }
})

app.listen(4000, () => {
    console.log('server running on port http://localhost:4000'); 
}) 
