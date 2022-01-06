import Subscription from "@app/infrastructure/model/subscription";

export class CreateSubscriptionViewModel {
    private readonly _subscription: Subscription
    private readonly _statusCode:number
    constructor(subscription: Subscription, statusCode:number) {
        this._subscription = subscription
        this._statusCode = statusCode
    }

    get subscription(): Subscription {
        return this._subscription;
    }

    get statusCode(): number {
        return this._statusCode;
    }
}