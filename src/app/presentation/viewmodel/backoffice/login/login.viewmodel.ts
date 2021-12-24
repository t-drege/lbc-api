export class LoginViewModel {

    private readonly _tokens:object
    private readonly _statusCode: number

    constructor(tokens: object, statusCode:number) {
        this._tokens = tokens
        this._statusCode = statusCode
    }

    get tokens(): object {
        return this._tokens;
    }

    get statusCode(): number {
        return this._statusCode;
    }

}