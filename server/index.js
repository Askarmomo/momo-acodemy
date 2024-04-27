import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { createUserRquest } from './modules/request.js'
const SERVER_PORT = 2000
const app = express()
dotenv.config()
app.use(express.json())

app.get('/', (req, res) => {

    const about = [
        {
            name: "Asakr",
            Favurit: 'web develepment',
            lover: 'momo'
        }
    ]

    res.json(about)
})

app.post('/request', async (req, res) => {

    try {

        await createUserRquest(req.body)
    } catch (error) {
        console.log(error);
        res.json({
            error:true
        })
    }
    res.json({
        successfull: true
    })
})

app.listen(SERVER_PORT, (() => {
    console.log('server port running on' + SERVER_PORT);
}))

if (process.env.MONGODB_URL) {

    try {

        mongoose.connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log("err from mangodb" + error);
    }
} else {
    console.log('env not set');
}
