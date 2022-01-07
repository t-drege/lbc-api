export class ReadAllSubscriptionViewModel {
    private readonly _rows: any
    private readonly _statusCode: number

    constructor(rows: any, statusCode: number) {
        this._rows = rows
        this._statusCode = statusCode
    }

    get rows(): any {
        return this._rows;
    }

    get statusCode(): number {
        return this._statusCode;
    }
}