import Product from "@app/infrastructure/model/product";

export class UpdateProductViewModel {
    private readonly _product: Product
    private readonly _statusCode: number

    constructor(product: Product, statusCode: number) {
        this._product = product
        this._statusCode = statusCode
    }

    get product(): Product {
        return this._product;
    }

    get statusCode(): number {
        return this._statusCode;
    }
}