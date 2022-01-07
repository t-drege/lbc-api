export class RemoveMediaViewModel {
    private readonly _numberElementDeleted: string
    private readonly _statusCode:number

    constructor(numberElementDeleted: string,statusCode:number) {
        this._numberElementDeleted = numberElementDeleted
        this._statusCode = statusCode
    }

    get numberElementDeleted(): string {
        return this._numberElementDeleted;
    }

    get statusCode(): number {
        return this._statusCode;
    }

}