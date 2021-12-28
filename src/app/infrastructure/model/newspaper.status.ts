import {Table, Column, Model, HasMany} from 'sequelize-typescript'
import Newspaper from "@app/infrastructure/model/newspaper";


@Table({tableName: "newspaper_status"})
export default class NewspaperStatus extends Model {

    @Column({field:'value'})
    value: string

    @Column({field: 'created_at'})
    createdAt: Date

    @Column({field: 'updated_at'})
    updatedAt: Date

    @HasMany(() => Newspaper)
    newspapers: Newspaper[]

}