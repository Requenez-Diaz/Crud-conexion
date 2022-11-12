import mongoose from "mongoose";

const veterinarySchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    price: String,
    dateExpiration: String,
    sales: String,
 
});

export const Veterinary = mongoose.model('Veterinary', veterinarySchema);