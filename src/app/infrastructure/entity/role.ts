import {Table, Column, Model, PrimaryKey, HasMany} from 'sequelize-typescript'
import {User} from "./user/user";

@Table({tableName: "role"})
export class Role extends Model {

    @Column
    value: string

    @HasMany(() => User)
    users: User[]

}