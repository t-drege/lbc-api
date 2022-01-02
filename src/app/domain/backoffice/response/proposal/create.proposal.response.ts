import Proposal from "@app/infrastructure/model/proposal";

export class CreateProposalResponse {

    private readonly _proposal: Proposal

    constructor(proposal: Proposal) {
        this._proposal = proposal
    }

    get proposal(): Proposal {
        return this._proposal;
    }

}