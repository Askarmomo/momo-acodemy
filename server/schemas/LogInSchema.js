import mongoose, { Schema } from "mongoose";


const schema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
})

const userModel = mongoose.model('user', schema)

export default userModel

