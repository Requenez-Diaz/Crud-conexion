import { Game } from "./interface";
import { videoGamesExceptions } from './exceptions';


const validateRecipeInput = (data: Game) => {
    if (!data.title) throw new videoGamesExceptions("Property title is missing");
    if (data.title.length < 3) throw new videoGamesExceptions("Property title must be at least 3 characters");
    if (data.title.length > 20) throw new videoGamesExceptions("Property title must be at most 20 characters");
    if (!data.price) throw new videoGamesExceptions("Property price is missing");
}

export default {
    validateRecipeInput
}