import Product from "@app/infrastructure/model/product";

export interface CreateProductGateway {

    createSubscriptionProduct(body: object): Promise<any>

    createProductPaypal(body: object): Promise<any>

    getProductPaypal(id: string): Promise<any>

    create(product:Product): Promise<Product>

    updateKeyProduct(id: number, productPaypalId: string, planId: string): Promise<[number, Product[]]>

    findProduct(id:number): Promise<Product>

}