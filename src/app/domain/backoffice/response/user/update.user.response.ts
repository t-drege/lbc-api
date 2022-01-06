import User from "@app/infrastructure/model/user";

export class UpdateUserResponse {
    private readonly _user: User

    constructor(user: User) {
        this._user = user
    }

    get user(): User {
        return this._user;
    }
}