import {Table, Column, Model, HasMany, HasOne, ForeignKey, BelongsTo, BeforeCreate} from 'sequelize-typescript'

import * as bcrypt from 'bcrypt'
import Role from "@app/infrastructure/model/role";
import Article from "@app/infrastructure/model/article";
import Category from "@app/infrastructure/model/category";
import Proposal from "@app/infrastructure/model/proposal";

@Table({tableName: 'user'})
export default class User extends Model {

    @Column({field: "firstname"})
    firstname: string

    @Column({field: "lastname"})
    lastname: string

    @Column({field: "username"})
    username: string

    @Column({field: "email"})
    email: string

    @Column({field: "password"})
    password: string

    @Column({field: "created_at"})
    createdAt: Date

    @Column({field: "updated_at"})
    updatedAt: Date

    @ForeignKey(() => Role)
    @Column({field: "role_id"})
    roleId: number

    @BelongsTo(() => Role)
    role: Role

    @HasMany(() => Article)
    articles: Article[]

    @HasOne(() => Category)
    category: Category

    @HasMany(() => Proposal, {foreignKey: 'user_id', as: 'userProposal'})
    proposals: Proposal[]

    @BeforeCreate
    public static async encryptPassword(user: User) {
        user.password = await bcrypt.hash(user.password, 10).then(function (hash) {
            return hash
        })
    }

}