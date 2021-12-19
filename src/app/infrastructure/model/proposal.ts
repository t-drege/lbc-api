import {Table, Column, Model, ForeignKey, BelongsTo} from 'sequelize-typescript'
import ProposalStatus from "@app/infrastructure/model/proposal.status";
import Category from "@app/infrastructure/model/category";
import User from "@app/infrastructure/model/user";
import Newspaper from "@app/infrastructure/model/newspaper";

@Table({tableName: "proposal"})
export default class Proposal extends Model {

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