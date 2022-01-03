export interface DeleteProposalGateway {
    deleteProposal(proposalId: number) : Promise<number>
}