export class HttpError extends Error {
    constructor(status, message) {
        super();
        this.name = 'HttpError';
        this.status = status;
        this.message = message;
    }

    static badStatusError(response) {
        return new HttpError(response.status, response.statusText);
    }
}