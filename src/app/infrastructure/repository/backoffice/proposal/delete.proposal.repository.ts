import {DeleteProposalGateway} from "@app/domain/backoffice/gateway/proposal/delete.proposal.gateway";
import {Injectable} from "@nestjs/common";
import Proposal from "@app/infrastructure/model/proposal";

@Injectable()
export class DeleteProposalRepository implements DeleteProposalGateway {
    deleteProposal(proposalId: number): Promise<number> {
        return Proposal.destroy({
            where: {
                id: proposalId
            }
        })
    }
}
