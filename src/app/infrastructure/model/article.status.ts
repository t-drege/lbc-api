import {Table, Column, Model, PrimaryKey, HasMany} from 'sequelize-typescript'
import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";


@Table({tableName: 'article_status'})
export default class ArticleStatus extends Model {

    public static IS_SEND_ID: number = 2

    @PrimaryKey
    @Column
    id: number

    @Column
    value: string

    /*@HasMany(() => ArticleNewspaper)
    articles: ArticleNewspaper[]*/
}