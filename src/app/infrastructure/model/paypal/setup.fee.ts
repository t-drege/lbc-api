import {JsonProperty, Serializable} from "typescript-json-serializer";

@Serializable()
export class SetupFee {
    @JsonProperty('value')
    value:string

    @JsonProperty('currency_code')
    currencyCode:string
}