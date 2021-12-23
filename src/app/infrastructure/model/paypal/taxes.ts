import {JsonProperty, Serializable} from "typescript-json-serializer";

@Serializable()
export class Taxes {
    @JsonProperty('percentage')
    percentage: string

    @JsonProperty('inclusive')
    inclusive: boolean
}