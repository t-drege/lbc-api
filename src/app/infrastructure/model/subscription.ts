import {BelongsTo, Column, ForeignKey, Model, Table} from "sequelize-typescript";
import User from "@app/infrastructure/model/user";
import Product from "@app/infrastructure/model/product";
import PaymentType from "@app/infrastructure/model/payment.type";
import SubscriptionStatus from "@app/infrastructure/model/subscription.status";
import Newspaper from "@app/infrastructure/model/newspaper";

@Table({tableName: 'subscription'})
export default class Subscription extends Model {

    @Column({field: 'number_subscription'})
    numberSubscription: string

    @Column({field: 'automatic'})
    automatic: boolean

    @Column({field: "adress"})
    adress: string

    @Column({field: "city"})
    city: string

    @Column({field: "postal_code"})
    postalCode: number

    @Column({field: "country"})
    country: string

    @Column({field: 'date_start'})
    dateStart: Date

    @Column({field: 'date_end'})
    dateEnd: Date

    @Column({field: 'created_at'})
    createdAt: Date

    @Column({field: 'updated_at'})
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

    @ForeignKey(() => SubscriptionStatus)
    @Column({field: 'subscription_status_id'})
    subscriptionStatusId: number

    @BelongsTo(() => Product)
    product: Product

}