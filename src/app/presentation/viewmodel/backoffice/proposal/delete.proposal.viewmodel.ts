export class DeleteProposalViewModel {
    private readonly _numberProposalDeleted: string
    private readonly _statusCode: number

    constructor(numberProposalDeleted: string, statusCode: number) {
        this._statusCode = statusCode
        this._numberProposalDeleted = numberProposalDeleted
    }


    get numberProposalDeleted(): string {
        return this._numberProposalDeleted;
    }

    get statusCode(): number {
        return this._statusCode;
    }
}
