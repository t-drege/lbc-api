import {JsonProperty, Serializable} from "typescript-json-serializer";
import {PaymentPreferences} from "@app/infrastructure/model/paypal/payment.preferences";
import {Taxes} from "@app/infrastructure/model/paypal/taxes";
import {BillingCycles} from "@app/infrastructure/model/paypal/billing.cycles";

@Serializable()
export class Plans {

    @JsonProperty({name: 'id'})
    id: string

    @JsonProperty('product_id')
    productId: string

    @JsonProperty('name')
    name: string

    @JsonProperty('description')
    description: string

    @JsonProperty('status')
    status: string

    @JsonProperty({name: 'billing_cycles', type: BillingCycles})
    billingCycles: Array<BillingCycles>

    @JsonProperty('payment_preferences')
    paymentPreferences: PaymentPreferences

    @JsonProperty('taxes')
    taxes: Taxes

}