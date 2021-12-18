import {Table, Column, Model, ForeignKey, BelongsTo} from 'sequelize-typescript'
import {ProposalStatus} from "./proposal.status";
import {Category} from "./category";
import {User} from "./user/user";
import {Newspaper} from "./newspaper";

@Table({tableName: "proposal"})
export class Proposal extends Model {

    @Column
    topic: string

    @ForeignKey(() => ProposalStatus)
    @Column({field: 'proposal_status_id'})
    proposalStatusId: number

    @ForeignKey(() => Category)
    @Column({field: 'category_id'})
    categoryId: number

    @ForeignKey(() => User)
    @Column({field: 'user_id'})
    userId: number

    @ForeignKey(() => Newspaper)
    @Column({field: 'newspaper_id'})
    newspaperId: number

    @BelongsTo(() => ProposalStatus)
    proposalStatus: ProposalStatus

    @BelongsTo(() => Category)
    category: Category

    @BelongsTo(() => User, {foreignKey: 'user_id', as: 'userProposal'})
    user: User

    @BelongsTo(() => Newspaper)
    newspaper: Newspaper

}