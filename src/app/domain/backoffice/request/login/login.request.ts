export class LoginRequest {

    private readonly _user:any

    constructor(user:any) {
        this._user = user
    }

    get user(): any {
        return this._user;
    }

}