import {Table, Column, Model, ForeignKey, BelongsTo} from 'sequelize-typescript'
import ProposalStatus from "@app/infrastructure/model/proposal.status";
import Category from "@app/infrastructure/model/category";
import User from "@app/infrastructure/model/user";
import Newspaper from "@app/infrastructure/model/newspaper";

@Table({tableName: "proposal"})
export default class Proposal extends Model {

    @Column({field: 'title'})
    title: string

    @Column({field: 'description'})
    description: string

    @Column({field: 'newspaper_number'})
    newspaperNumber: number

    @Column({field: 'created_at'})
    createdAt: Date

    @Column({field: 'updated_at'})
    updatedAt: Date

    @ForeignKey(() => User)
    @Column({field: 'user_id'})
    userId: number

    @ForeignKey(() => ProposalStatus)
    @Column({field: 'proposal_status_id'})
    proposalId: number

    @ForeignKey(() => Category)
    @Column({field: 'category_id'})
    categoryId: number
}