import {Inject, Injectable} from "@nestjs/common";
import {CreateProposalResponse} from "@app/domain/backoffice/response/proposal/create.proposal.response";
import {CreateProposalRequest} from "@app/domain/backoffice/request/proposal/create.proposal.request";
import {CreateProposalGateway} from "@app/domain/backoffice/gateway/proposal/create.proposal.gateway";
import Proposal from "@app/infrastructure/model/proposal";

@Injectable()
export class CreateProposal {
    private gateway: CreateProposalGateway

    constructor(@Inject('CreateProposalGateway') gateway: CreateProposalGateway) {
        this.gateway = gateway
    }

    public async execute(request: CreateProposalRequest) {

        let proposal: Proposal = await this.gateway.createProposal(
            request.title,
            request.description,
            request.newspaperNumber,
            request.userId,
            request.proposalStatusId,
            request.categoryId)

        proposal = await this.gateway.findProposalById(proposal.id)

        return new CreateProposalResponse(proposal)

    }
}