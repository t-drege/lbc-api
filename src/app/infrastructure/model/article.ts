import {Column, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import Media from "@app/infrastructure/model/media";
import Newspaper from "@app/infrastructure/model/newspaper";
import User from "@app/infrastructure/model/user";
import Category from "@app/infrastructure/model/category";
import ArticleStatus from "@app/infrastructure/model/article.status";
import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";

@Table({tableName: 'article'})
export default class Article extends Model {

    @Column({field: 'title'})
    title: string

    @Column({field: 'sub_title'})
    subTitle: string

    @Column({field: 'slug'})
    slug: string

    @Column({field: 'body_html'})
    bodyHtml: string

    @Column({field: 'published_at'})
    publishedAt: Date

    @Column({field: 'created_at'})
    createdAt: Date

    @Column({field: 'updated_at'})
    updatedAt: Date

    @Column({field: 'media_id'})
    @ForeignKey(() => Media)
    mediaId: number

    @Column({field: 'newspaper_id'})
    @ForeignKey(() => Newspaper)
    newspaperId: number

    @Column({field: 'user_id'})
    @ForeignKey(() => User)
    userId: number

    @Column({field: 'category_id'})
    @ForeignKey(() => Category)
    categoryId: number

    @Column({field: 'article_status_id'})
    @ForeignKey(() => ArticleStatus)
    articleStatusId: number

    @Column({field: 'article_newspaper_id'})
    @ForeignKey(() => ArticleNewspaper)
    articleNewspaperId: number

}