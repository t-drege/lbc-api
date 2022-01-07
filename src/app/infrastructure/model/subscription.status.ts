import {Column, Model, Table} from "sequelize-typescript";

@Table({tableName: 'subscription_status'})
export default class SubscriptionStatus extends Model {

    static ACTIVATED = 1
    static SUSPENDED = 2
    static CANCELLED = 3
    static WAITING_FOR_PAYMENT = 4

    @Column({field: 'value'})
    value: string

    @Column({field: 'created_at'})
    createdAt: Date

    @Column({field: 'updated_at'})
    updatedAt: Date
}