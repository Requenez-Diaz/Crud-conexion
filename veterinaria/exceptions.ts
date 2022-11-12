export class VeterinaryException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'VeterinaryException';
    }
}