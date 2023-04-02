import { ListModel, listModel } from "../models/list-model";

export async function getAllLists() {
    return listModel.find().exec();
}

export async function createNewList(data: ListModel) {
    const list = await listModel.create({
        name: data.name,
        users: data.users,
        admin: data.admin
    })

    console.log(list);
}