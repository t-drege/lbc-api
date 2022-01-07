import {Inject, Injectable} from "@nestjs/common";
import {ReadAllSubscriptionGateway} from "@app/domain/backoffice/gateway/subscription/read.all.subscription.gateway";
import {ReadAllSubscriptionRequest} from "@app/domain/backoffice/request/subscription/read.all.subscription.request";
import {ReadAllSubscriptionResponse} from "@app/domain/backoffice/response/subscription/read.all.subscription.response";
import {pagination, pagingData} from "@app/application/utils/pagination";

@Injectable()
export class ReadAllSubscription {
    private readonly gateway: ReadAllSubscriptionGateway

    constructor(@Inject('ReadAllSubscriptionGateway')gateway: ReadAllSubscriptionGateway) {
        this.gateway = gateway
    }

    public async execute(request: ReadAllSubscriptionRequest) {
        console.log(request.page, request.limit)
        const {limit, offset} = pagination(request.page, request.limit)
        const subscriptions = await this.gateway.findAllSubscriptions(offset, limit)
        const rows = pagingData(subscriptions, request.page, limit)
        return new ReadAllSubscriptionResponse(rows)
    }
}