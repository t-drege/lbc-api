import {Inject, Injectable} from "@nestjs/common";
import {UpdateProposalGateway} from "@app/domain/backoffice/gateway/proposal/update.proposal.gateway";
import {UpdateProposalRequest} from "@app/domain/backoffice/request/proposal/update.proposal.request";
import {UpdateProposalResponse} from "@app/domain/backoffice/response/proposal/update.proposal.response";

@Injectable()
export class UpdateProposal {
    private readonly gateway: UpdateProposalGateway

    constructor(@Inject('UpdateProposalGateway') gateway: UpdateProposalGateway) {
        this.gateway = gateway
    }

    public async execute(request: UpdateProposalRequest) {
        await this.gateway.updateProposal(request.proposalId, request.title, request.description, request.newspaperNumber, request.proposalStatusId, request.categoryId)
        return new UpdateProposalResponse(await this.gateway.findProposalById(request.proposalId))
    }
}