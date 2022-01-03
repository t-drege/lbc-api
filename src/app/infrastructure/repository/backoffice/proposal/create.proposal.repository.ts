import {CreateProposalGateway} from "@app/domain/backoffice/gateway/proposal/create.proposal.gateway";
import Proposal from "@app/infrastructure/model/proposal";
import {Injectable} from "@nestjs/common";
import ProposalStatus from "@app/infrastructure/model/proposal.status";
import User from "@app/infrastructure/model/user";
import Category from "@app/infrastructure/model/category";

@Injectable()
export class CreateProposalRepository implements CreateProposalGateway {

    createProposal(title: string, description: string, newspaperNumber: number, userId: number, proposalStatusId: number, categoryId: number): Promise<Proposal> {
        return Proposal.create({
            title: title,
            description: description,
            newspaperNumber: newspaperNumber,
            userId: userId,
            proposalStatusId: proposalStatusId,
            categoryId: categoryId
        }, {
            returning: true,
            raw: true
        })
    }

    findProposalById(proposalId: number): Promise<Proposal> {
        return Proposal.findByPk(proposalId, {
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
        });
    }

}