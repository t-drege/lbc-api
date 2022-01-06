import {Column, Model, Table} from "sequelize-typescript";

@Table({tableName: 'subscription_status'})
export default class SubscriptionStatus extends Model{
    @Column({field: 'value'})
    value: string

    @Column({field: 'created_at'})
    createdAt: Date

    @Column({field: 'updated_at'})
    updatedAt: Date
}