import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    id: String,
    nameProduct: String,
    image: String,
    price: Number,
    description: String,
    recipe: String,
});

export const Menu = mongoose.model('Menu', menuSchema);