export class RemoveMediaResponse {
    private readonly _numberMediaDeleted: number

    constructor(numberMediaDeleted: number) {
        this._numberMediaDeleted = numberMediaDeleted
    }

    get numberMediaDeleted(): number {
        return this._numberMediaDeleted;
    }
}