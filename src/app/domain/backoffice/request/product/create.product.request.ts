export class CreateProductRequest {

    private readonly _description: string
    private readonly _price: number
    private readonly _quantity: number
    private readonly _activated: boolean
    private readonly _mediaId: number
    private readonly _productTypeId: number
    private readonly _newspaperId: number
    private readonly _frequency: string
    private readonly _isSubscription: boolean

    constructor(description: string, price: number, quantity: number, activated: boolean, mediaId: number, productTypeId: number, newspaperId: number, frequency:string, isSubscription: boolean) {
        this._description = description
        this._price = price
        this._quantity = quantity
        this._activated = activated
        this._mediaId = mediaId
        this._productTypeId = productTypeId
        this._newspaperId = newspaperId
        this._frequency = frequency
        this._isSubscription = isSubscription
    }

    get description(): string {
        return this._description;
    }

    get price(): number {
        return this._price;
    }

    get quantity(): number {
        return this._quantity;
    }

    get activated(): boolean {
        return this._activated;
    }

    get mediaId(): number {
        return this._mediaId;
    }

    get productTypeId(): number {
        return this._productTypeId;
    }

    get newspaperId(): number {
        return this._newspaperId;
    }

    get frequency(): string {
        return this._frequency;
    }

    get isSubscription(): boolean {
        return this._isSubscription;
    }

}