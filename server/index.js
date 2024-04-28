import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import {
    createUserRquest,
    deleteUser,
    getAllUsers,
    updateUser
} from './modules/request.js';
import cors from "cors"

const SERVER_PORT = 2000
const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

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

// send user data to data base
app.post('/request', async (req, res) => {

    try {

        await createUserRquest(req.body)
    } catch (error) {
        console.log(error);
        res.json({
            error: true
        })
    }
    res.json({
        successfull: true
    })
})

// get all user data from database
app.get("/data", async (req, res) => {

    const gettingDatas = await getAllUsers()

    res.json(gettingDatas)
})

// update one data from database
app.put("/final/:id", async (req, res) => {

    const docid = req.params.id

    if (docid) {
        const updateUserOne = await updateUser(docid, req.body)
        return res.json(updateUserOne)
    }
    return res.status(403)
})

// delete one user by id from database
app.delete("/remove/:id", async (req, res) => {

    const docId = req.params.id

    if (docId) {
        const deleteData = await deleteUser(docId)
        return res.json(true)
    }
    return res.status(403)
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
