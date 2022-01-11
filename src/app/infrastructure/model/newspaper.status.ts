import {Table, Column, Model, HasMany} from 'sequelize-typescript'
import Newspaper from "@app/infrastructure/model/newspaper";


@Table({tableName: "newspaper_status"})
export default class NewspaperStatus extends Model {

    static NOT_BEGINNING =1
    static IS_RUNNING = 2
    static PUBLISHED = 3

    @Column({field:'value'})
    value: string

    @Column({field: 'created_at'})
    createdAt: Date

    @Column({field: 'updated_at'})
    updatedAt: Date

    @HasMany(() => Newspaper)
    newspapers: Newspaper[]

}