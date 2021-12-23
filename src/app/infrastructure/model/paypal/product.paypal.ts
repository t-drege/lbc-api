import {JsonProperty, Serializable} from "typescript-json-serializer";

@Serializable()
export class ProductPaypal {

    @JsonProperty({name: 'product_id'})
    productId: string

    @JsonProperty({name: 'id'})
    id: string

    @JsonProperty({name: 'name'})
    name: string

    @JsonProperty({name: 'description'})
    description: string

    @JsonProperty({name: 'type'})
    type: string = 'PHYSICAL'

    @JsonProperty({name: 'category'})
    category: string = "BOOKS_PERIODICALS_AND_NEWSPAPERS"

    @JsonProperty({name: 'image_url'})
    imageUrl: string

    @JsonProperty({name: 'home_url'})
    homeUrl: string

}