import {Table, Column, Model, PrimaryKey, HasMany} from 'sequelize-typescript'

@Table({tableName: 'article_type'})
export default class ArticleType extends Model {

    @Column({field: 'value'})
    value: string

    @Column({field: 'created_at'})
    createdAt: Date

    @Column({field: 'updated_at'})
    updatedAt: Date

}