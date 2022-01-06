import {Inject, Injectable} from "@nestjs/common";
import {CreateSubscriptionGateway} from "@app/domain/backoffice/gateway/subscription/create.subscription.gateway";
import {CreateSubscriptionRequest} from "@app/domain/backoffice/request/subscription/create.subscription.request";
import Subscription from "@app/infrastructure/model/subscription";
import {CreateSubscriptionResponse} from "@app/domain/backoffice/response/subscription/create.subscription.response";

@Injectable()
export class CreateSubscription {
    private readonly gateway: CreateSubscriptionGateway

    constructor(@Inject('CreateSubscriptionGateway')gateway: CreateSubscriptionGateway) {
        this.gateway = gateway
    }

    public async execute(request: CreateSubscriptionRequest) {
        const subscription: Subscription = await this.gateway.createSubscription(request.userId, request.productId, request.paymentTypeId).then((subscription) => this.gateway.findSubscriptionById(subscription.id))
        return new CreateSubscriptionResponse(subscription)
    }

}