import {Table, Column, Model, HasMany} from 'sequelize-typescript'
import Product from "@app/infrastructure/model/product";

@Table({tableName: "payment_type"})
export default class PaymentType extends Model {

    @Column({field: 'value'})
    value: string

    @Column({field: 'created_at'})
    createdAt: Date

    @Column({field: 'updated_at'})
    updatedAt: Date

}