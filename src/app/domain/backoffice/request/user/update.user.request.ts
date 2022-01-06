export class UpdateUserRequest {
    private readonly _userId:number
    private readonly _firstname: string
    private readonly _lastname: string
    private readonly _username: string
    private readonly _email: string
    private readonly _password: string
    private readonly _phone: string
    private readonly _adress: string
    private readonly _postalCode: number
    private readonly _roleId: number

    constructor(userId:number,firstname: string, lastname: string, username: string, email: string, password: string, phone: string, adress: string, postalCode: number, roleId: number) {
        this._userId = userId
        this._firstname = firstname
        this._lastname = lastname
        this._username = username
        this._email = email
        this._password = password
        this._phone = phone
        this._adress = adress
        this._postalCode = postalCode
        this._roleId = roleId
    }

    get userId(): number {
        return this._userId;
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


    get phone(): string {
        return this._phone;
    }

    get adress(): string {
        return this._adress;
    }

    get postalCode(): number {
        return this._postalCode;
    }

    get roleId(): number {
        return this._roleId;
    }

}