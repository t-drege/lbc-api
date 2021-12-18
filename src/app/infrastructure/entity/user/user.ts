import {Table, Column, Model, HasMany, HasOne, ForeignKey, BelongsTo, BeforeCreate} from 'sequelize-typescript'
import {Role} from "../role";
import {Article} from "../article";
import {Category} from "../category";
import {Proposal} from "../proposal";


@Table({tableName: 'user'})
export class User extends Model {

    @Column
    firstname: string

    @Column
    lastname: string

    @Column
    username: string

    @Column
    email: string

    @Column
    password: string

    @ForeignKey(() => Role)
    @Column({
        field: "role_id"
    })
    roleId: number

    @BelongsTo(() => Role)
    role: Role

    @HasMany(() => Article)
    articles: Article[]

    @HasOne(() => Category)
    category: Category

    @HasMany(() => Proposal, {foreignKey: 'user_id', as: 'userProposal'})
    proposals: Proposal[]

    @HasMany(() => Proposal, {foreignKey:'author_id', as: 'author'})
    proposalsAuthor: Proposal[]

    /*@BeforeCreate
    public static async encryptPassword(user: User) {
        user.password = await bcrypt.hash(user.password, 10).then(function (hash) {
            return hash
        })
    }*/

}