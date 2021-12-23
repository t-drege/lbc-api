import {JsonProperty, Serializable} from "typescript-json-serializer";
import {Frequency} from "@app/infrastructure/model/paypal/frequency";
import {FixedPrice} from "@app/infrastructure/model/paypal/fixed.price";
import {PricingScheme} from "@app/infrastructure/model/paypal/pricingScheme";

@Serializable()
export class BillingCycles {
    @JsonProperty('frequency')
    frequency: Frequency

    @JsonProperty('tenure_type')
    tenureType: string

    @JsonProperty('sequence')
    sequence: number

    @JsonProperty('total_cycles')
    totalCycles: number

    @JsonProperty('pricing_scheme')
    pricingScheme: PricingScheme


}