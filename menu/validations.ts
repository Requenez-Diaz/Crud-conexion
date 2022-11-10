import { Menu } from "./interface";
import { MenuException } from './exceptions';


const validateRecipeInput = (data: Menu) => {
    if (!data.nameProduct) throw new MenuException("Property title is missing");
    if (data.nameProduct.length < 3) throw new MenuException("Property menu must be at least 20 characters");
    if (data.nameProduct.length > 20) throw new MenuException("Property menu must be at most 20 characters");
    if (!data.image) throw new MenuException("Property image is missing");
}

export default {
    validateRecipeInput
}