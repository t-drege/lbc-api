import {Table, Column, Model, HasMany} from 'sequelize-typescript'
import {Newspaper} from "./newspaper";

@Table({tableName: "newspaper_status"})
export class NewspaperStatus extends Model {

    @Column
    value: string

    @HasMany(() => Newspaper)
    newspapers: Newspaper[]

}