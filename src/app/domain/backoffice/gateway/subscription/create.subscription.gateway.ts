import Subscription from "@app/infrastructure/model/subscription";

export interface CreateSubscriptionGateway {
    createSubscription(userId: number, productId: number, paymentTypeId: number): Promise<Subscription>

    findSubscriptionById(subscriptionId: number): Promise<Subscription>
}