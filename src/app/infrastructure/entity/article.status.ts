import {Table, Column, Model, PrimaryKey, HasMany} from 'sequelize-typescript'
import {Article} from "./article";

@Table({tableName: 'article_status'})
export class ArticleStatus extends Model {

    public static IS_SEND_ID: number = 2

    @PrimaryKey
    @Column
    id: number

    @Column
    value: string

    @HasMany(() => Article)
    articles: Article[]
}