export class videoGamesExceptions extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'videoGamesExceptions';
    }
}