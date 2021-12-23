import {JsonProperty, Serializable} from "typescript-json-serializer";
import {FixedPrice} from "@app/infrastructure/model/paypal/fixed.price";

@Serializable()
export class PricingScheme {
    @JsonProperty('fixed_price')
    fixedPrice: FixedPrice
}