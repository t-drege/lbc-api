import User from "@app/infrastructure/model/user";

export class UpdateUserViewModel {
    private readonly _user: User
    private readonly _statusCode: number

    constructor(user: User, statusCode: number) {
        this._user = user
        this._statusCode = statusCode
    }

    get user(): User {
        return this._user;
    }

    get statusCode(): number {
        return this._statusCode;
    }
}