import mongoose, { Schema } from "mongoose";

// backend schema
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

//created module
const requestModule = mongoose.model('requestModule', schema)


// creating a user request and sent to database
export const createUserRquest = async (data) => {

    try {
        return await requestModule.create(data)
    } catch (error) {
        console.log(error);
    }

}

// getting all users from database
export const getAllUsers = async () => {

    try {
        const getingData = await requestModule.find({})
        return getingData
    } catch (error) {
        console.log(error);
    }

}

// update a user from database

export const updateUser = async (id, data) => {

    try {
        return await requestModule.findOneAndUpdate({ _id: id }, data, { new: true, })
    } catch (error) {
        throw error
    }

}

// delete a user from database

export const deleteUser = async (id) => {
    try {
        return await requestModule.deleteOne({ _id: id })
    } catch (error) {
        throw error
    }
}