import {Inject, Injectable} from "@nestjs/common";
import {UpdateStatusSubscriptionGateway} from "@app/domain/backoffice/gateway/subscription/update.status.subscription.gateway";
import {UpdateStatusSubscriptionRequest} from "@app/domain/backoffice/request/subscription/update.status.subscription.request";
import {UpdateStatusSubscriptionResponse} from "@app/domain/backoffice/response/subscription/update.status.subscription.response";
import Product from "@app/infrastructure/model/product";
import SubscriptionStatus from "@app/infrastructure/model/subscription.status";

@Injectable()
export class UpdateStatusSubscription {
    private readonly gateway: UpdateStatusSubscriptionGateway

    constructor(@Inject('UpdateStatusSubscriptionGateway') gateway: UpdateStatusSubscriptionGateway) {
        this.gateway = gateway
    }

    public async execute(request: UpdateStatusSubscriptionRequest) {
        let dateEnd: Date = null
        let subscription = await this.gateway.findSubscriptionById(request.subscriptionId)

        if (request.subscriptionStatusId == SubscriptionStatus.CANCELLED && subscription.product.frequency != null) {
            dateEnd = subscription.dateStart;
            (subscription.product.frequency == Product.FREQUENCY_YEAR) ? dateEnd.setFullYear(dateEnd.getFullYear() + 1, dateEnd.getMonth(), dateEnd.getDay()) : dateEnd.setFullYear(dateEnd.getFullYear(), dateEnd.getMonth() + 1, dateEnd.getDate())
        }

        subscription = await this.gateway.updateStatusSubscription(request.subscriptionId, request.subscriptionStatusId, dateEnd).then(() => this.gateway.findSubscriptionById(request.subscriptionId))

        console.log(subscription.numberSubscription)
        if (subscription.numberSubscription != null) {
            switch (request.subscriptionStatusId) {
                case SubscriptionStatus.ACTIVATED:
                    await this.gateway.activatedSubscriptionPaypal(subscription.numberSubscription)
                    break;
                case SubscriptionStatus.SUSPENDED:
                    await this.gateway.deactivatedSubscriptionPaypal(subscription.numberSubscription)
                    break;
                case SubscriptionStatus.CANCELLED:
                    await this.gateway.cancelledSubscriptionPaypal(subscription.numberSubscription)
                    break
                default:
                    break;
            }
        }


        return new UpdateStatusSubscriptionResponse(subscription)
    }
}