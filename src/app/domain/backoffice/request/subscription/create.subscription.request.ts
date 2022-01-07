export class CreateSubscriptionRequest {
    private readonly _userId: number
    private readonly _productId: number
    private readonly _paymentTypeId: number
    private readonly _adress: string
    private readonly _city: string
    private readonly _postalCode: number

    constructor(userId: number, productId: number, paymentTypeId: number,  adress: string, city: string, postalCode: number) {
        this._userId = userId
        this._productId = productId
        this._paymentTypeId = paymentTypeId
        this._adress = adress
        this._city = city
        this._postalCode = postalCode
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

    get adress(): string {
        return this._adress;
    }

    get city(): string {
        return this._city;
    }

    get postalCode(): number {
        return this._postalCode;
    }

}