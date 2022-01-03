import {UpdateProposalGateway} from "@app/domain/backoffice/gateway/proposal/update.proposal.gateway";
import Proposal from "@app/infrastructure/model/proposal";
import {Injectable} from "@nestjs/common";

@Injectable()
export class UpdateProposalRepository implements UpdateProposalGateway {

    findProposalById(proposalId: number): Promise<Proposal> {
        return Proposal.findByPk(proposalId);
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