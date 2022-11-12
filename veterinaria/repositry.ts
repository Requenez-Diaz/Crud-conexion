import { ulid } from 'ulid';
import { Veterinary } from './models';
import { Veterinary as IVeterinary } from './interfaces';

const list = async () => {
    return await Veterinary.find();
}

const store = async (data: IVeterinary) => {
    const id = ulid();

    const model = new Veterinary({ id, name: data.name, description: data.description, price: data.price, dateExpiration: data.dateExpiration, Sales: data.Sales });

    await model.save();

    return model;
}


const getOne = async (id: string) => {
    return await Veterinary.findOne({ id });
}

const deleteItem = async (id: string) => {
    return await Veterinary.deleteOne({ id });
}


const update = async (id: string, data: IVeterinary) => {

    const model = await Veterinary.findOneAndUpdate({ id }, data, { new: true });

    return model;
}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update
}