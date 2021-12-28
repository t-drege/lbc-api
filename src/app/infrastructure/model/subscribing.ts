import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import User from "@app/infrastructure/model/user";
import Product from "@app/infrastructure/model/product";

@Table({tableName: 'subscribing'})
export default class Subscribing extends Model {

    @Column({field:'number_subscribing'})
    numberSubscribing: string

    @Column({field:'date_start'})
    dateStart: Date

    @Column({field:'date_end'})
    dateEnd: Date

    @Column({field:'created_at'})
    createdAt: Date

    @Column({field:'updated_at'})
    updatedAt: Date

    @ForeignKey(() => User)
    @Column({field: 'user_id'})
    userId: number

    @ForeignKey(() => Product)
    @Column({field: 'product_id'})
    productId: number

}