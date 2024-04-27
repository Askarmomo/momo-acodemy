import mongoose, { Schema } from "mongoose";

const schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        hobby: {
            type: String,
            required: true
        },
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