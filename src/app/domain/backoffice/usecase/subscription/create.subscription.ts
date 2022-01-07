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

        let dateEnd = new Date()
        dateEnd.setFullYear(dateEnd.getFullYear() + 1, dateEnd.getMonth(), dateEnd.getDay())

        const subscription: Subscription = await this.gateway.createSubscription(
            request.userId,
            request.productId,
            request.paymentTypeId,
            request.adress,
            request.city,
            request.postalCode,
            dateEnd).then((subscription) => this.gateway.findSubscriptionById(subscription.id))

        return new CreateSubscriptionResponse(subscription)

    }

}