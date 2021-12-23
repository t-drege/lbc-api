import {Table, Column, Model, HasMany, ForeignKey} from 'sequelize-typescript'
import Proposal from "@app/infrastructure/model/proposal";
import Product from "@app/infrastructure/model/product";

@Table({tableName: "product_type"})
export default class ProductType extends Model {

    static SUBSCRIPTION_TYPE = 1

    @Column({field: 'value'})
    value: string

    @Column({field: 'created_at'})
    createdAt: Date

    @Column({field: 'updated_at'})
    updatedAt: Date

    @HasMany(() => Product, 'product_type_id')
    proposals: Product[]

}