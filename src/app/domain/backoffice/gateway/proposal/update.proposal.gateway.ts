import Proposal from "@app/infrastructure/model/proposal";

export interface UpdateProposalGateway {
    updateProposal(proposalId: number, title: string, description: string, newspaperNumber: number, proposalStatusId: number, categoryId: number): Promise<[number, Proposal[]]>

    findProposalById(proposalId: number): Promise<Proposal>
}