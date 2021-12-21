import {ListNewspapersGateway} from "@app/domain/backoffice/gateway/newspaper/list.newspapers.gateway";
import {Inject, Injectable} from "@nestjs/common";
import {ListNewspapersRequest} from "@app/domain/backoffice/request/newspaper/list.newspapers.request";
import {pagination, pagingData} from "@app/application/utils/pagination";
import {ListNewspaperResponse} from "@app/domain/backoffice/response/newspaper/list.newspaper.response";

@Injectable()
export class ListNewspapers {
    private readonly gateway: ListNewspapersGateway

    constructor(@Inject('ListNewspapersGateway') gateway: ListNewspapersGateway) {
        this.gateway = gateway
    }

    public async execute(request: ListNewspapersRequest) {
        const {limit, offset} = pagination(request.page, request.limit)
        const newspapers = await this.gateway.findAll(offset, limit)
        const rows = pagingData(newspapers, request.page, limit)
        return new ListNewspaperResponse(rows)
    }

}