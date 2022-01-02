import {Injectable} from "@nestjs/common";
import {AllProposalsGateway} from "@app/domain/backoffice/gateway/proposal/all.proposals.gateway";
import Proposal from "@app/infrastructure/model/proposal";
import ProposalStatus from "@app/infrastructure/model/proposal.status";
import User from "@app/infrastructure/model/user";
import Category from "@app/infrastructure/model/category";

@Injectable()
export class AllProposalsRepository implements AllProposalsGateway {

    findAllProposals(offset: number, limit: number): Promise<any> {
        return Proposal.findAndCountAll({
            //attributes: ['id', 'number', 'principalTheme', 'folderUpload'],
            include: [
                {
                    model: ProposalStatus,
                    attributes: ['id', 'value']
                },
                {
                    model: User,
                    attributes: ['id', 'firstname', 'lastname', 'username']
                },
                {
                    model: Category,
                    attributes: ['id', 'value', 'color'],
                    include: [
                        {
                            model: User,
                            attributes: ['id', 'firstname', 'lastname', 'username']
                        }
                    ]
                }
            ],
            limit: limit,
            offset: offset,
            order: [
                ['createdAt', 'DESC'],
            ]
        })
    }

}