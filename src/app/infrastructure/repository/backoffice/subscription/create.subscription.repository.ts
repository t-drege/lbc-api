import {CreateSubscriptionGateway} from "@app/domain/backoffice/gateway/subscription/create.subscription.gateway";
import Subscription from "@app/infrastructure/model/subscription";

export class CreateSubscriptionRepository implements CreateSubscriptionGateway {
    createSubscription(userId: number, productId: number, paymentTypeId: number): Promise<Subscription> {
        return Subscription.create({
            userId: userId,
            productId: productId,
            paymentTypeId: paymentTypeId
        }, {
            returning: true,
            raw: true
        });
    }

    findSubscriptionById(subscriptionId: number): Promise<Subscription> {
        return Subscription.findByPk(subscriptionId)
    }

}