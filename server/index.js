import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import userModel from './schemas/LogInSchema.js'

const app = express()
dotenv.config()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
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

app.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await userModel.findOne({ email }) 
        if (user) {
            if (user.password === password) {
                const accessToken = jwt.sign({ email: email }, process.env.SECRET_KEY, { expiresIn: '4m' })
                res.cookie('accessToken', accessToken, { maxAge: 60000 })
                res.json({ message: 'Login Successfully', cookie: accessToken })
            } else {
                res.json({ message: 'email or password is incorrect' })
            }
        } else {
            res.json({ message: 'user not exist' })
        }
    } catch (error) {
        console.log(`login:-${error.message}`);
    }
})

app.listen(4000, () => {
    console.log('server running on port http://localhost:4000');
}) 
