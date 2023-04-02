import mongoose from "mongoose";

export interface UserModel extends mongoose.Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema<UserModel>({
    firstName: {
        type: String,
        required: true,
        minlength: [2, "fistName is too short"]
    },

    lastName: {
        type: String,
        required: true,
        minlength: [2, "lastName is too short"]
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
        minlength: [2, "password is too short"]
    }
})

export const userModel = mongoose.model<UserModel>("users", userSchema);