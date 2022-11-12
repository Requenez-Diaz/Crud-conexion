import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    price: String,
    slug: String,
    brand: String,


});

export const Game = mongoose.model('Game', gameSchema);