import {Table, Column, Model, PrimaryKey, HasMany} from 'sequelize-typescript'
import User from "@app/infrastructure/model/user";


@Table({tableName: "role"})
export default class Role extends Model {

    @Column({field:'value'})
    value: string

    @Column({field: 'created_at'})
    createdAt: Date

    @Column({field: 'updated_at'})
    updatedAt: Date

    @HasMany(() => User)
    users: User[]

}