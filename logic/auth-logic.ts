import { UserModel, userModel } from "../models/user-model";

export async function getAllUsers() {
    return userModel.find().exec();
}

export async function createNewUser(data: UserModel) {
    const user = await userModel.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password
    })

    console.log(user);
}