import {CreateProductGateway} from "@app/domain/backoffice/gateway/product/create.product.gateway";
import {Inject, Injectable} from "@nestjs/common";
import {CreateProductRequest} from "@app/domain/backoffice/request/product/create.product.request";
import {CreateProductResponse} from "@app/domain/backoffice/response/product/create.product.response";
import {Plans} from "@app/infrastructure/model/paypal/plans";
import {BillingCycles} from "@app/infrastructure/model/paypal/billing.cycles";
import {Frequency} from "@app/infrastructure/model/paypal/frequency";
import {FixedPrice} from "@app/infrastructure/model/paypal/fixed.price";
import {PricingScheme} from "@app/infrastructure/model/paypal/pricingScheme";
import {PaymentPreferences} from "@app/infrastructure/model/paypal/payment.preferences";
import {SetupFee} from "@app/infrastructure/model/paypal/setup.fee";
import {Taxes} from "@app/infrastructure/model/paypal/taxes";
import {deserialize} from "typescript-json-serializer";
import {ProductPaypal} from "@app/infrastructure/model/paypal/product.paypal";
import Product from "@app/infrastructure/model/product";

@Injectable()
export class CreateProduct {

    PREFIX_PRODUCT_ID = "PRODUCT-LBC-ID-"

    private gateway: CreateProductGateway

    constructor(@Inject('CreateProductGateway') gateway: CreateProductGateway) {
        this.gateway = gateway
    }

    public async execute(request: CreateProductRequest) {

        let product: Product = await this.gateway.create(new Product({
                description: request.description,
                price: request.price,
                quantity: request.quantity,
                memberPricePack: request.price,
                mediaId: request.mediaId,
                productTypeId: request.productTypeId,
                newspaperId: request.newspaperId
            }
        ))

        if (request.isSubscription == true) {
            let productPaypal: ProductPaypal = this.createProduct(request, product.id)

            productPaypal = deserialize<ProductPaypal>(await this.gateway.createProductPaypal(productPaypal), ProductPaypal)

            const data = await this.gateway.createSubscriptionProduct(this.createSubscription(productPaypal, product))

            const plan = deserialize<Plans>(data, Plans)

            await this.gateway.updateKeyProduct(product.id, productPaypal.id, plan.id)
        }

        return new CreateProductResponse(await this.gateway.findProduct(product.id))
    }

    public createProduct(request: CreateProductRequest, productId: number): ProductPaypal {
        const product = new ProductPaypal()
        product.id = this.PREFIX_PRODUCT_ID + productId
        product.name = request.description
        product.description = request.description
        return product
    }

    public createSubscription(productPaypal: ProductPaypal, product: Product): Plans {
        const plans = new Plans()
        const fixedPrice = new FixedPrice()
        const pricingScheme = new PricingScheme()
        const billingCycles: BillingCycles = new BillingCycles()
        const frequency = new Frequency()
        const paymentPreferences = new PaymentPreferences()
        const setupFee = new SetupFee()
        const taxes = new Taxes()

        setupFee.currencyCode = "EUR"
        setupFee.value = product.price.toString()

        paymentPreferences.setupFee = setupFee
        paymentPreferences.autoBillOutstanding = true
        paymentPreferences.setupFeeFailureAction = "CONTINUE"
        paymentPreferences.paymentFailureThreshold = 1

        taxes.inclusive = false
        taxes.percentage = "0"

        fixedPrice.currencyCode = "EUR"
        fixedPrice.value = product.price

        pricingScheme.fixedPrice = fixedPrice

        frequency.intervalCount = 1
        frequency.intervalUnit = 'MONTH'

        billingCycles.frequency = frequency
        billingCycles.tenureType = "REGULAR"
        billingCycles.sequence = 1
        billingCycles.totalCycles = 0
        billingCycles.pricingScheme = pricingScheme

        plans.productId = productPaypal.id
        plans.name = product.description
        plans.description = product.description
        plans.status = "ACTIVE"
        plans.billingCycles = [billingCycles]
        plans.taxes = taxes
        plans.paymentPreferences = paymentPreferences

        return plans
    }
}