import Product from "@app/infrastructure/model/product";

export class CreateProductResponse {
    private readonly _product: Product

    constructor(product: Product) {
        this._product = product
    }

    get product(): Product {
        return this._product;
    }

}