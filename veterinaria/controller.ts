import { Veterinary } from './interfaces';
import repository from './repositry';
import validations from './validations';

const list = async () => {
    return await repository.list();
}


const store = async (data: Veterinary) => {
    validations.validateVeterinaryInput(data);

    const model = await repository.store(data);
    return model;
}


const getOne = async (id: string) => {
    const model = await repository.getOne(id);
    if (!model) throw new Error("Product not found");

    return model;
}

const deleteItem = async (id: string) => {
    const model = await repository.getOne(id);
    if (!model) throw new Error("Product not found");

    return await repository.delete(id);
}

const update = async (id: string, data: Veterinary) => {
    // TODO: validar que los datos sean correctos
    const model = await repository.getOne(id);
    if (!model) throw new Error("Product not found");


    const modelUpdated = await repository.update(id, data);
    return modelUpdated;
}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update
}