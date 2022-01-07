export class UpdateStatusSubscriptionRequest {
    private readonly _subscriptionId : number
    private readonly _subscriptionStatusId:number

    constructor(subscriptionId : number,subscriptionStatusId:number) {
        this._subscriptionId = subscriptionId
        this._subscriptionStatusId = subscriptionStatusId
    }

    get subscriptionId(): number {
        return this._subscriptionId;
    }

    get subscriptionStatusId(): number {
        return this._subscriptionStatusId;
    }
}