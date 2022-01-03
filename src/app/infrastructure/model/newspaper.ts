import {Table, Column, Model, PrimaryKey, BeforeCreate, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript'
import NewspaperStatus from "@app/infrastructure/model/newspaper.status";
import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";
import Proposal from "@app/infrastructure/model/proposal";
import User from "@app/infrastructure/model/user";
import Media from "@app/infrastructure/model/media";
import Product from "@app/infrastructure/model/product";

@Table({tableName: "newspaper"})
export default class Newspaper extends Model {

    @Column({field: 'number'})
    number: number

    @Column({field: "principal_theme"})
    principalTheme: string

    @Column({field: "folder_upload"})
    folderUpload: string

    @Column({field: "published_at"})
    publishedAt: Date

    @Column({field: "created_at"})
    createdAt: Date

    @Column({field: "updated_at"})
    updatedAt: Date

    @ForeignKey(() => Media)
    @Column({field: 'media_id'})
    mediaId: number

    @ForeignKey(() => User)
    @Column({field: 'user_id'})
    userId: number

    @ForeignKey(() => NewspaperStatus)
    @Column({field: 'newspaper_status_id'})
    newspaperStatusId: number

    @BelongsTo(() => NewspaperStatus)
    newspaperStatus: NewspaperStatus

    @BelongsTo(() => User)
    User: User

    @HasMany(() => Product)
    products: Product[]

    /*@HasMany(() => ArticleNewspaper)
    articles: ArticleNewspaper[]*/

    /*@HasMany(() => Proposal)
    proposals: Proposal[]*/

    /*@BeforeCreate
    public static async createFolderDrive(newspaper: Newspaper) {
        await NextCloud.createFolder(`LBC ${newspaper.number}`).then(function (response) {
            newspaper.driveFolder = `LBC ${newspaper.number}`
        })
    }*/

}