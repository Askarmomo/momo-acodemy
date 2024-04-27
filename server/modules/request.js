import mongoose, { Schema } from "mongoose";

const schema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 20,
        },
        lastName: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 20,
        },
        email: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 20,
        },
        number: {
            type: String,
            required: true,
            min: 9,
            maxLength: 10,
        },
        password: {
            type: String,
            required: true,
            minLength: 10,
            maxLength: 20,
        }
    }
)

const requestModule = mongoose.model('requestModule', schema)

export const createUserRquest = async (data) => {

    try {
        return await requestModule.create(data)
    } catch (error) {
        console.log(error);
    }

}

export const getAllUsers = async () => {

    try {
        const getingData = await requestModule.find({})
        return getingData
    } catch (error) {
        console.log(error);
    }

}