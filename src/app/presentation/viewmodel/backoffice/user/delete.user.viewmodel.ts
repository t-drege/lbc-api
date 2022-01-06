export class DeleteUserViewModel {
    private readonly _numberUserDeleted:string
    private readonly _statusCode:number

    constructor(numberUserDeleted:string, statusCode:number) {
        this._numberUserDeleted = numberUserDeleted
        this._statusCode = statusCode
    }

    get numberUserDeleted(): string {
        return this._numberUserDeleted;
    }

    get statusCode(): number {
        return this._statusCode;
    }

}