import mongoose from "mongoose";

export interface ListModel extends mongoose.Document {
    name: string;
    users: mongoose.Schema.Types.ObjectId[];
    admin: mongoose.Schema.Types.ObjectId;
}

const listSchema = new mongoose.Schema<ListModel>({
    name: {
        type: String,
        required: true
    },

    users: {
        type: [mongoose.Schema.Types.ObjectId]
    },

    admin: {
        type: mongoose.Schema.Types.ObjectId
    }
})

export const listModel = mongoose.model<ListModel>("list", listSchema);