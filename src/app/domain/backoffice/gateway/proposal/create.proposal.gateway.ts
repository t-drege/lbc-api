import Proposal from "@app/infrastructure/model/proposal";

export interface CreateProposalGateway {
    createProposal(title: string, description: string, newspaperNumber: number, userId: number, proposalStatusId: number, categoryId: number): Promise<Proposal>

    findProposalById(proposalId: number): Promise<Proposal>
}