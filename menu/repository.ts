import { ulid } from 'ulid';
import { Menu } from './models';
import { Menu as IMenu } from './interface';

const list = async () => {
    return await Menu.find();
}

const store = async (data: IMenu) => {
    const id = ulid();

    const model = new Menu({ id, nameProduct: data.nameProduct, image: data.image, price: data.price, description: data.description, recipe: data.recipe });

    await model.save();

    return model;
}


const getOne = async (id: string) => {
    return await  Menu.findOne({ id });
}

const deleteItem = async (id: string) => {
    return await Menu.deleteOne({ id });
}


const update = async (id: string, data: IMenu) => {

    const model = await Menu.findOneAndUpdate({ id }, data, { new: true });

    return model;
}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update
}