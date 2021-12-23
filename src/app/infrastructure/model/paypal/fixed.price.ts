import {JsonProperty, Serializable} from "typescript-json-serializer";

@Serializable()
export class FixedPrice {
    @JsonProperty('value')
    value:number

    @JsonProperty('currency_code')
    currencyCode:string
}