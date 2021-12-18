import {Table, Column, Model, PrimaryKey, BeforeCreate, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript'
import {NewspaperStatus} from "./newspaper.status";
import {Article} from "./article";
import {Proposal} from "./proposal";

@Table({tableName: "newspaper"})
export class Newspaper extends Model {

    @Column
    number: number

    @Column({field: "principal_theme"})
    principalTheme: string

    @Column({field: "drive_folder"})
    driveFolder: string

    @ForeignKey(() => NewspaperStatus)
    @Column({field: 'newspaper_status_id'})
    newspaperStatusId: number

    @BelongsTo(() => NewspaperStatus)
    newspaperStatus: NewspaperStatus

    @HasMany(() => Article)
    articles: Article[]

    @HasMany(() => Proposal)
    proposals: Proposal[]

    /*@BeforeCreate
    public static async createFolderDrive(newspaper: Newspaper) {
        await NextCloud.createFolder(`LBC ${newspaper.number}`).then(function (response) {
            newspaper.driveFolder = `LBC ${newspaper.number}`
        })
    }*/
}