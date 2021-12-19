import {Table, Column, Model, HasMany} from 'sequelize-typescript'
import Newspaper from "@app/infrastructure/model/newspaper";


@Table({tableName: "newspaper_status"})
export default class NewspaperStatus extends Model {

    @Column
    value: string

    @HasMany(() => Newspaper)
    newspapers: Newspaper[]

}