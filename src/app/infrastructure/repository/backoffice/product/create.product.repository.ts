import {CreateProductGateway} from "@app/domain/backoffice/gateway/product/create.product.gateway";
import Product from "@app/infrastructure/model/product";
import {Injectable} from "@nestjs/common";
import {PaypalRequest} from "@app/application/paypal/paypal.request";
import {serialize} from "typescript-json-serializer";
import {ProductPaypal} from "@app/infrastructure/model/paypal/product.paypal";
import Newspaper from "@app/infrastructure/model/newspaper";
import NewspaperStatus from "@app/infrastructure/model/newspaper.status";
import ProductType from "@app/infrastructure/model/product.type";

@Injectable()
export class CreateProductRepository implements CreateProductGateway {

    private readonly paypalRequest: PaypalRequest

    constructor(paypalRequest: PaypalRequest) {
        this.paypalRequest = paypalRequest
    }

    create(product: Product): Promise<Product> {
        return Product.create(product.toJSON(), {
            returning: true,
            raw: true
        })
    }

    updateKeyProduct(id: number, productPaypalId: string, planId: string): Promise<[number, Product[]]> {
        return Product.update({
            keyProductProvider: planId,
            providerId: productPaypalId
        }, {
            where: {
                id: id
            },
            returning: true,
        })
    }

    createSubscriptionProduct(body: object): Promise<any> {
        return this.paypalRequest.post('/billing/plans', serialize(body))
    }

    createProductPaypal(body: ProductPaypal): Promise<any> {
        return this.paypalRequest.post('/catalogs/products', serialize(body))
    }

    getProductPaypal(id: string): Promise<any> {
        return this.paypalRequest.read('/catalogs/products/' + id)
    }

    findProduct(id: number): Promise<Product> {
        return Product.findByPk(id, {
            include: [{
                model: ProductType,
                attributes: ['id', 'value']
            }]
        })
    }

}