export class AllUserResponse {
    private readonly _rows: any

    constructor(rows: any) {
        this._rows = rows
    }

    get rows(): any {
        return this._rows;
    }
}