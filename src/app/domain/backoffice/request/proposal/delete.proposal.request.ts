export class DeleteProposalRequest {
    private readonly _proposalId: number

    constructor(proposalId: number) {
        this._proposalId = proposalId
    }

    get proposalId(): number {
        return this._proposalId;
    }
}