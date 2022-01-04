import {Inject} from "@nestjs/common";
import {UpdateProductRequest} from "@app/domain/backoffice/request/product/update.product.request";
import Product from "@app/infrastructure/model/product";
import {UpdateProductGateway} from "@app/domain/backoffice/gateway/product/update.product.gateway";
import {UpdateProductResponse} from "@app/domain/backoffice/response/product/update.product.response";

export class UpdateProduct {
    private readonly gateway: UpdateProductGateway

    constructor(@Inject('UpdateProductGateway')gateway: UpdateProductGateway,) {
        this.gateway = gateway
    }

    public async execute(request: UpdateProductRequest) {
        let product: Product = await this.gateway.findProductById(request.productId)

        if (product.keyProductProvider != null) {

            if (request.activated == true && product.activated == false) {
                await this.gateway.activatedPlanProductPaypal(product.keyProductProvider)
            }

            if (request.activated == false && product.activated == true) {
                await this.gateway.deactivatedPlanProductPaypal(product.keyProductProvider)
                await this.gateway.updatePricePlanProductPaypal(product.keyProductProvider, this.createPricingScheme(request))
                await this.gateway.updatePriceProductWithPlan(product.id, request.price)
            }

            product = await this.gateway.updateProductWithPlan(request.productId, request.quantity, request.activated, request.mediaId, request.productTypeId).then(() => this.gateway.findProductById(request.productId))

        } else {
            product = await this.gateway.updateProductById(request.productId, request.description, request.price, request.quantity, request.activated, request.price, request.mediaId, request.productTypeId, request.newspaperId).then(() => this.gateway.findProductById(request.productId))
        }

        return new UpdateProductResponse(product)
    }

    private createPricingScheme(request: UpdateProductRequest): object {
        return {
            'pricing_schemes':
                [
                    {
                        "billing_cycle_sequence": 1,
                        "pricing_scheme": {
                            "fixed_price": {
                                "value": request.price.toString(),
                                "currency_code": "EUR"
                            },
                            "roll_out_strategy": {
                                "effective_time": new Date().toISOString(),
                                "process_change_from": "NEXT_PAYMENT"
                            }
                        }
                    },
                ]
        }
    }
}