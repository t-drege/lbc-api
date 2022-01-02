import {Inject, Injectable} from "@nestjs/common";
import {AllProposalsGateway} from "@app/domain/backoffice/gateway/proposal/all.proposals.gateway";
import {AllProposalsRequest} from "@app/domain/backoffice/request/proposal/all.proposals.request";
import {AllProposalsResponse} from "@app/domain/backoffice/response/proposal/all.proposals.response";
import {pagination, pagingData} from "@app/application/utils/pagination";

@Injectable()
export class AllProposals {
    private readonly gateway: AllProposalsGateway

    constructor(@Inject('AllProposalsGateway')gateway: AllProposalsGateway) {
        this.gateway = gateway
    }

    public async execute(request: AllProposalsRequest) {
        const {limit, offset} = pagination(request.page, request.limit)
        const newspapers = await this.gateway.findAllProposals(offset, limit)
        const rows = pagingData(newspapers, request.page, limit)
        return new AllProposalsResponse(rows)
    }
}