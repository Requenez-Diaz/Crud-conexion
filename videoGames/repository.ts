import { Game} from './models';
import { Game as IGame} from './interface';
import { ulid } from 'ulid';

const list = async () => {
    return await Game.find();
}

const getOne = async (id: string) => {
    return await Game.findOne({ id });
}
const store = async (data: IGame) => {
    const id = ulid();

    const game = new Game({ name: data.title, description: data.description, price: data.price, id, brand: data.brand});

    await game.save();

    return game;
}
const deleteItem = async (id : String) => {
    return await Game.deleteOne({  id });

}

 const update = async (id: string, data:IGame)=>{
    const model = await Game. findOneAndUpdate({id}, data, {new: true});
    return model;
 }

export default {
    list,
    getOne,
    store,
    delete: deleteItem,
    update
}