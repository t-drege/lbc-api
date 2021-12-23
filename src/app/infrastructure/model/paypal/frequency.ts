import {JsonProperty, Serializable} from "typescript-json-serializer";

@Serializable()
export class Frequency {
    @JsonProperty('interval_unit')
    intervalUnit: string

    @JsonProperty('interval_count')
    intervalCount: number
}