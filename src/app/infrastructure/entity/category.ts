import {Table, Column, Model, PrimaryKey, HasMany, ForeignKey, HasOne, BelongsTo} from 'sequelize-typescript'
import {User} from "./user/user";
import {Article} from "./article";
import {Proposal} from "./proposal";

@Table({tableName: "category"})
export class Category extends Model {

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