import { Veterinary } from "./interfaces";
import { VeterinaryException } from './exceptions';


const validateVeterinaryInput = (data: Veterinary) => {
    if (!data.name) throw new VeterinaryException("Property name is missing");
    if (data.name.length < 3) throw new VeterinaryException("Property name must be at least 3 characters");
    if (data.name.length > 20) throw new VeterinaryException("Property name must be at most 20 characters");
    if (!data.description) throw new VeterinaryException("Property description is missing");
}

export default {
    validateVeterinaryInput
}