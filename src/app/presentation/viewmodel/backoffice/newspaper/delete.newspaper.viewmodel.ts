export class DeleteNewspaperViewModel {

    private readonly _numberObjectDeleted: string
    private readonly _statusCode: number

    constructor(numberObjectDeleted: string, statusCode: number) {
        this._statusCode = statusCode
        this._numberObjectDeleted = numberObjectDeleted
    }

    get numberObjectDeleted(): string {
        return this._numberObjectDeleted;
    }

    get statusCode(): number {
        return this._statusCode;
    }

}