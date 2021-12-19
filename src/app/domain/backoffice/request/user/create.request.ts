export default class CreateRequest {

    private readonly _firstname: string
    private readonly _lastname: string
    private readonly _username: string
    private readonly _email: string
    private readonly _password: string
    private readonly _roleId: number

    constructor(firstname: string, lastname: string, username: string, email: string, password: string, roleId: number) {
        this._firstname = firstname
        this._lastname = lastname
        this._username = username
        this._email = email
        this._password = password
        this._roleId = roleId
    }

    get firstname(): string {
        return this._firstname;
    }

    get lastname(): string {
        return this._lastname;
    }

    get username(): string {
        return this._username;
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }

    get roleId(): number {
        return this._roleId;
    }

}