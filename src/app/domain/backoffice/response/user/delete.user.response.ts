export class DeleteUserResponse {
    private readonly _numberUserDeleted:number

    constructor(numberUserDeleted:number) {
        this._numberUserDeleted = numberUserDeleted
    }

    get numberUserDeleted(): number {
        return this._numberUserDeleted;
    }

}