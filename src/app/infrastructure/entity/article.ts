import {Table, Column, Model, ForeignKey, BelongsTo} from 'sequelize-typescript'
import {User} from "./user/user";
import {Category} from "./category";
import {Newspaper} from "./newspaper";
import {ArticleStatus} from "./article.status";

@Table({tableName: 'article'})
export class Article extends Model {

    @Column
    comment: string

    @Column
    order: number

    @Column({field: "drive_file_id"})
    driveFileId: string

    @ForeignKey(() => User)
    @Column({field: 'user_id'})
    userId: number

    @ForeignKey(() => Category)
    @Column({field: 'category_id'})
    categoryId: number

    @ForeignKey(() => Newspaper)
    @Column({field: 'newspaper_id'})
    newspaperId: number

    @ForeignKey(() => ArticleStatus)
    @Column({field: 'article_status_id'})
    articleStatusId: number

    @BelongsTo(() => User)
    user: User

    @BelongsTo(() => Category)
    category: Category

    @BelongsTo(() => Newspaper)
    newspaper: Newspaper

    @BelongsTo(() => ArticleStatus)
    articleStatus: ArticleStatus

}