export class HttpError extends Error {
    constructor(status, message) {
        super();
        this.name = 'HttpError';
        this.status = status;
        this.message = message;
    };

    static badStatusError(response, result) {
        return new HttpError(response.status, result.message);
    };
}