import {UpdateProposalGateway} from "@app/domain/backoffice/gateway/proposal/update.proposal.gateway";
import Proposal from "@app/infrastructure/model/proposal";
import {Injectable} from "@nestjs/common";
import ProposalStatus from "@app/infrastructure/model/proposal.status";
import User from "@app/infrastructure/model/user";
import Category from "@app/infrastructure/model/category";

@Injectable()
export class UpdateProposalRepository implements UpdateProposalGateway {

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

    updateProposal(proposalId: number, title: string, description: string, newspaperNumber: number, proposalStatusId: number, categoryId: number): Promise<[number, Proposal[]]> {
        return Proposal.update({
            title: title,
            description: description,
            newspaperNumber: newspaperNumber,
            proposalStatusId: proposalStatusId,
            categoryId: categoryId
        }, {
            where: {
                id: proposalId
            }
        });
    }

}