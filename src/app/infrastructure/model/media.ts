import {Table, Column, Model, HasMany} from 'sequelize-typescript'
import Newspaper from "@app/infrastructure/model/newspaper";
import Product from "@app/infrastructure/model/product";


@Table({tableName: "media"})
export default class Media extends Model {

    @Column({field:'value'})
    value: string

    @Column({field:'path'})
    path:string

    @Column({field:'mime_type'})
    mimeType:string

    @Column({field: 'created_at'})
    createdAt: Date

    @Column({field: 'updated_at'})
    updatedAt: Date

    @HasMany(() => Product)
    products: Product[]

}