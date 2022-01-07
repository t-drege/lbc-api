import {UpdateStatusSubscriptionGateway} from "@app/domain/backoffice/gateway/subscription/update.status.subscription.gateway";
import {Injectable} from "@nestjs/common";
import Subscription from "@app/infrastructure/model/subscription";
import NewspaperStatus from "@app/infrastructure/model/newspaper.status";
import Product from "@app/infrastructure/model/product";
import {PaypalRequest} from "@app/application/paypal/paypal.request";

@Injectable()
export class UpdateStatusSubscriptionRepository implements UpdateStatusSubscriptionGateway {
    private readonly paypalRequest: PaypalRequest

    constructor(paypalRequest: PaypalRequest) {
        this.paypalRequest = paypalRequest
    }

    activatedSubscriptionPaypal(numberSubscription: string): Promise<any> {
        return this.paypalRequest.post(`/billing/subscriptions/${numberSubscription}/activate`, null)
    }

    cancelledSubscriptionPaypal(numberSubscription: string): Promise<any> {
        return this.paypalRequest.post(`/billing/subscriptions/${numberSubscription}/cancel`, null)
    }

    deactivatedSubscriptionPaypal(numberSubscription: string): Promise<any> {
        return this.paypalRequest.post(`/billing/subscriptions/${numberSubscription}/suspend`, null)
    }

    findSubscriptionById(subscriptionId: number): Promise<Subscription> {
        return Subscription.findByPk(subscriptionId, {
            include: [
                {
                    model: Product
                }
            ]
        })
    }

    updateStatusSubscription(subscriptionId: number, subscriptionStatusId: number, dateEnd: Date): Promise<[number, Subscription[]]> {
        return Subscription.update({
            subscriptionStatusId: subscriptionStatusId,
            dateEnd: dateEnd
        }, {
            where: {
                id: subscriptionId
            },
        })
    }

}