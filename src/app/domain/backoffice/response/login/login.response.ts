export class LoginResponse {

    private readonly _tokens: any

    constructor(tokens: any = null) {
        this._tokens = tokens
    }

    get tokens(): any {
        return this._tokens;
    }

}