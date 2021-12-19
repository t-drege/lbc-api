import {Table, Column, Model, PrimaryKey, HasMany} from 'sequelize-typescript'
import User from "@app/infrastructure/model/user";


@Table({tableName: "role"})
export default class Role extends Model {

    @Column
    value: string

    @HasMany(() => User)
    users: User[]

}