export class MenuException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'MenuException';
    }
}