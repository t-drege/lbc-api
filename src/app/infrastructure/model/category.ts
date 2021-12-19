import {Table, Column, Model, PrimaryKey, HasMany, ForeignKey, HasOne, BelongsTo} from 'sequelize-typescript'
import Article from "@app/infrastructure/model/article";
import User from "@app/infrastructure/model/user";
import Proposal from "@app/infrastructure/model/proposal";


@Table({tableName: "category"})
export default class Category extends Model {

    @Column
    value: string

    @Column({field: 'user_id'})
    @ForeignKey(() => User)
    userId: number

    @BelongsTo(() => User, 'user_id')
    user: User

    @HasMany(() => Article)
    articles: Article[]

    @HasMany(() => Proposal)
    proposals: Proposal[]

}