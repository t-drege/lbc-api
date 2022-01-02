import Proposal from "@app/infrastructure/model/proposal";

export class CreateProposalViewModel {

    private readonly _proposal: Proposal
    private readonly _statusCode: number

    constructor(proposal: Proposal, statusCode: number) {
        this._proposal = proposal
        this._statusCode = statusCode
    }

    get proposal(): Proposal {
        return this._proposal;
    }

    get statusCode(): number {
        return this._statusCode;
    }

}