export class CreateSubscriptionRequest {
    private readonly _userId:number
    private readonly _productId:number
    private readonly _paymentTypeId: number

    constructor(userId:number, productId:number, paymentTypeId:number) {
        this._userId = userId
        this._productId = productId
        this._paymentTypeId = paymentTypeId
    }

    get userId(): number {
        return this._userId;
    }

    get productId(): number {
        return this._productId;
    }

    get paymentTypeId(): number {
        return this._paymentTypeId;
    }

}