export class LoginResponse {

    private readonly _token: string
    private readonly _refreshToken: string
    private readonly _role: number

    constructor(token: string = null, refreshToken: string = null, role = null) {
        this._token = token
        this._refreshToken = refreshToken
        this._role = role
    }

    get token(): string {
        return this._token;
    }

    get refreshToken(): string {
        return this._refreshToken;
    }

    get role(): number {
        return this._role;
    }

}