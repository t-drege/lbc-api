import {Table, Column, Model, HasMany} from 'sequelize-typescript'
import Proposal from "@app/infrastructure/model/proposal";


@Table({tableName: "proposal_status"})
export default class ProposalStatus extends Model {

    @Column({field: 'value'})
    value: string

    @Column({field: 'created_at'})
    createdAt: Date

    @Column({field: 'updated_at'})
    updatedAt: Date

    @HasMany(() => Proposal, 'proposal_status_id')
    proposals: Proposal[]

}