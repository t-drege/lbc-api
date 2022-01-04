import {UpdateProductGateway} from "@app/domain/backoffice/gateway/product/update.product.gateway";
import {Injectable} from "@nestjs/common";
import {PaypalRequest} from "@app/application/paypal/paypal.request";
import Product from "@app/infrastructure/model/product";

@Injectable()
export class UpdateProductRepository implements UpdateProductGateway {

    private readonly paypalRequest: PaypalRequest

    constructor(paypalRequest: PaypalRequest) {
        this.paypalRequest = paypalRequest
    }

    updateProductById(productId: number, description: string, price: number, quantity: number, activated: boolean, memberPricePack: number, mediaId: number, productTypeId: number, newspaperId: number): Promise<[number, Product[]]> {
        return Product.update({
            description: description,
            price: price,
            quantity: quantity,
            activated: activated,
            memberPricePack: price,
            mediaId: mediaId,
            productTypeId: productTypeId,
            newspaperId: newspaperId
        }, {
            where: {
                id: productId
            },
            returning: true,
        })
    }

    findProductById(productId: number): Promise<Product> {
        return Product.findByPk(productId)
    }

    updateProductWithPlan(productId: number, quantity: number, activated: boolean, mediaId: number, productTypeId: number): Promise<[number, Product[]]> {
        return Product.update({
            quantity: quantity,
            activated: activated,
            mediaId: mediaId,
            productTypeId: productTypeId
        }, {
            where: {
                id: productId
            },
            returning: true,
        })
    }

    activatedPlanProductPaypal(keyProductProvider: string) {
        this.paypalRequest.post('/billing/plans/' + keyProductProvider + '/activate', null)
    }

    deactivatedPlanProductPaypal(keyProductProvider: string) {
        this.paypalRequest.post('/billing/plans/' + keyProductProvider + '/deactivate', null)
    }

    updatePricePlanProductPaypal(keyProductProvider: string, body: object) {
        this.paypalRequest.post("/billing/plans/" + keyProductProvider + "/update-pricing-schemes", body)
    }

    updatePriceProductWithPlan(productId: number, price: number) {
        Product.update({
            price: price,
            memberPricePack: price,
        }, {
            where: {
                id: productId
            }
        })
    }
}