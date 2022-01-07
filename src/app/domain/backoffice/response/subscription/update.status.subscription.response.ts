import Subscription from "@app/infrastructure/model/subscription";

export class UpdateStatusSubscriptionResponse {
    private readonly _subscription: Subscription

    constructor(subscription: Subscription) {
        this._subscription = subscription
    }

    get subscription(): Subscription {
        return this._subscription;
    }

}