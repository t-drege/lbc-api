export class DeleteNewspaperResponse {

    private readonly _numberObjectDeleted:number

    constructor(numberObjectDeleted:number) {
        this._numberObjectDeleted = numberObjectDeleted
    }

    get numberObjectDeleted(): number {
        return this._numberObjectDeleted;
    }

}