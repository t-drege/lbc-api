import {Table, Column, Model, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript'
import ProductType from "@app/infrastructure/model/product.type";
import Media from "@app/infrastructure/model/media";
import Newspaper from "@app/infrastructure/model/newspaper";
import Subscription from "@app/infrastructure/model/subscription";

@Table({tableName: "product"})
export default class Product extends Model {

    static FREQUENCY_MONTH = "MONTH"
    static FREQUENCY_YEAR = "YEAR"

    @Column({field: 'description'})
    description: string

    @Column({field: 'price'})
    price: number

    @Column({field: 'provider_id'})
    providerId: string

    @Column({field: 'key_product_provider'})
    keyProductProvider: string

    @Column({field: 'member_price_pack'})
    memberPricePack: number

    @Column({field: 'quantity'})
    quantity: number

    @Column({field: 'activated'})
    activated: boolean

    @Column({field: 'frequency'})
    frequency: string

    @Column({field: 'created_at'})
    createdAt: Date

    @Column({field: 'updated_at'})
    updatedAt: Date

    @ForeignKey(() => Media)
    @Column({field: 'media_id'})
    mediaId: number

    @ForeignKey(() => ProductType)
    @Column({field: 'product_type_id'})
    productTypeId: number

    @ForeignKey(() => Newspaper)
    @Column({field: 'newspaper_id'})
    newspaperId: number

    @BelongsTo(() => Media)
    media: Media

    @BelongsTo(() => ProductType)
    productType: ProductType

    @BelongsTo(() => Newspaper)
    newspaper: Newspaper

    @HasMany(() => Subscription)
    subscriptions: Subscription[]

}