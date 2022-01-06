import {Inject, Injectable} from "@nestjs/common";
import {AllUserGateway} from "@app/domain/backoffice/gateway/user/all.user.gateway";
import {AllUserRequest} from "@app/domain/backoffice/request/user/all.user.request";
import {pagination, pagingData} from "@app/application/utils/pagination";
import {AllUserResponse} from "@app/domain/backoffice/response/user/all.user.response";

@Injectable()
export class AllUser {
    private gateway: AllUserGateway

    constructor(@Inject('AllUserGateway') gateway: AllUserGateway) {
        this.gateway = gateway
    }

    public async execute(request: AllUserRequest) {
        const {limit, offset} = pagination(request.page, request.limit)
        const newspapers = await this.gateway.findAllUsers(offset, limit, null)
        const rows = pagingData(newspapers, request.page, limit)
        return new AllUserResponse(rows)
    }
}