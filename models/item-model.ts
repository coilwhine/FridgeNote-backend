import mongoose from "mongoose";

export interface ItemModel extends mongoose.Document {
    name: string;
    discription: string;
    expiration: string;
}

const itemSchema = new mongoose.Schema<ItemModel>({
    name: {
        type: String,
        required: true,
    },

    discription: {
        type: String,
        required: false,
    },

    expiration: {
        type: String,
        required: false,
    }
})

export const itemModel = mongoose.model<ItemModel>("items", itemSchema);