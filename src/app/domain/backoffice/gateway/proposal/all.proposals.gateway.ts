export interface AllProposalsGateway {
    findAllProposals(offset: number, limit: number): Promise<any>
}