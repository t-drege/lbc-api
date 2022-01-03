import {DeleteProposalGateway} from "@app/domain/backoffice/gateway/proposal/delete.proposal.gateway";
import {Inject, Injectable} from "@nestjs/common";
import {DeleteProposalRequest} from "@app/domain/backoffice/request/proposal/delete.proposal.request";
import {DeleteProposalResponse} from "@app/domain/backoffice/response/proposal/delete.proposal.response";

@Injectable()
export class DeleteProposal {
    private readonly gateway: DeleteProposalGateway

    constructor(@Inject('DeleteProposalGateway')gateway: DeleteProposalGateway) {
        this.gateway = gateway
    }

    public async execute(request: DeleteProposalRequest) {
        const number = await this.gateway.deleteProposal(request.proposalId)
        return new DeleteProposalResponse(number)
    }

}