import {Table, Column, Model, PrimaryKey, HasMany, ForeignKey, HasOne, BelongsTo} from 'sequelize-typescript'
import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";
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

    @HasMany(() => ArticleNewspaper)
    articles: ArticleNewspaper[]

    @HasMany(() => Proposal)
    proposals: Proposal[]

}