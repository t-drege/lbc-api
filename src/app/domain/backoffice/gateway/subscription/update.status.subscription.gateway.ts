import Subscription from "@app/infrastructure/model/subscription";

export interface UpdateStatusSubscriptionGateway {

    findSubscriptionById(subscriptionId: number): Promise<Subscription>

    updateStatusSubscription(subscriptionId: number, subscriptionStatusId: number, dateEnd: Date): Promise<[number, Subscription[]]>

    deactivatedSubscriptionPaypal(numberSubscription: string): Promise<any>

    activatedSubscriptionPaypal(numberSubscription: string): Promise<any>

    cancelledSubscriptionPaypal(numberSubscription: string): Promise<any>

}