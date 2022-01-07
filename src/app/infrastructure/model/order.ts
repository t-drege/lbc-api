import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import User from "@app/infrastructure/model/user";
import Product from "@app/infrastructure/model/product";
import PaymentType from "@app/infrastructure/model/payment.type";

@Table({tableName: "order"})
export default class Order extends Model {

    @Column({field: "adress"})
    adress: string

    @Column({field: "city"})
    city: string

    @Column({field: "postal_code"})
    postalCode: number

    @Column({field: "country"})
    country: string

    @Column({field: "created_at"})
    createdAt: Date

    @Column({field: "updated_at"})
    updatedAt: Date

    @ForeignKey(() => User)
    @Column({field: 'user_id'})
    userId: number

    @ForeignKey(() => Product)
    @Column({field: 'product_id'})
    productId: number

    @ForeignKey(() => PaymentType)
    @Column({field: 'payment_type_id'})
    paymentTypeId: number

}