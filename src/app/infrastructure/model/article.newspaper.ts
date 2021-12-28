import {Table, Column, Model, ForeignKey, BelongsTo} from 'sequelize-typescript'
import User from "@app/infrastructure/model/user";
import Category from "@app/infrastructure/model/category";
import Newspaper from "@app/infrastructure/model/newspaper";
import ArticleNewspaperStatus from "@app/infrastructure/model/article.newspaper.status";

@Table({tableName: "article_newspaper"})
export default class ArticleNewspaper extends Model {

    @Column({field: 'title'})
    title: string

    @Column({field: 'description'})
    description: string

    @Column({field: 'file_upload_url'})
    fileUploadUrl: string

    @Column({field: 'category_id'})
    @ForeignKey(() => Category)
    categoryId: number

    @Column({field: 'user_id'})
    @ForeignKey(() => User)
    userId: number

    @Column({field: 'newspaper_id'})
    @ForeignKey(() => Newspaper)
    newspaperId: number

    @Column({field: 'article_newspaper_status_id'})
    @ForeignKey(() => ArticleNewspaperStatus)
    articleNewspaperStatusId: number

    @Column({field: 'created_at'})
    createdAt: Date

    @Column({field: 'updated_at'})
    updatedAt: Date

    @BelongsTo(() => ArticleNewspaperStatus)
    articleNewspaperStatus: ArticleNewspaperStatus

}