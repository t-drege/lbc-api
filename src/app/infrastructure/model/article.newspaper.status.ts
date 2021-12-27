import {Table, Column, Model, PrimaryKey, HasMany} from 'sequelize-typescript'
import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";


@Table({tableName: 'article_newspaper_status'})
export default class ArticleNewspaperStatus extends Model {

    @Column({field:'value'})
    value: string

    @Column({field:'created_at'})
    createdAt: Date

    @Column({field:'updated_at'})
    updatedAt: Date

    @HasMany(() => ArticleNewspaper)
    articles: ArticleNewspaper[]

}