import Product from "@app/infrastructure/model/product";

export interface UpdateProductGateway {
    updateProductById(productId: number, description: string, price: number, quantity: number, activated: boolean, memberPricePack: number, mediaId: number, productTypeId: number, newspaperId: number): Promise<[number, Product[]]>

    updateProductWithPlan(productId: number, quantity: number, activated: boolean, mediaId: number, productTypeId: number): Promise<[number, Product[]]>

    updatePriceProductWithPlan(productId: number, price: number)

    findProductById(productId: number): Promise<Product>

    activatedPlanProductPaypal(keyProductProvider: string)

    deactivatedPlanProductPaypal(keyProductProvider: string)

    updatePricePlanProductPaypal(keyProductProvider: string, body: object)
}