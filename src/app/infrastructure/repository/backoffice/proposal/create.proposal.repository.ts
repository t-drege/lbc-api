import {CreateProposalGateway} from "@app/domain/backoffice/gateway/proposal/create.proposal.gateway";
import Proposal from "@app/infrastructure/model/proposal";
import {Injectable} from "@nestjs/common";

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
        return Proposal.findByPk(proposalId);
    }

}