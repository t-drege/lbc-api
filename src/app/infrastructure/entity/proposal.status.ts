import {Table, Column, Model, HasMany} from 'sequelize-typescript'
import {Proposal} from "./proposal";

@Table({tableName: "proposal_status"})
export class ProposalStatus extends Model {

    @Column
    value: string

    @HasMany(() => Proposal, 'proposal_status_id')
    proposals: Proposal[]

}