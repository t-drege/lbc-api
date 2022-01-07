import Subscription from "@app/infrastructure/model/subscription";

export interface CreateSubscriptionGateway {
    createSubscription(userId: number, productId: number, paymentTypeId: number, adress: string, city: string, postalCode: number, dateEnd: Date): Promise<Subscription>

    findSubscriptionById(subscriptionId: number): Promise<Subscription>
}