import {UpdateProposalResponse} from "@app/domain/backoffice/response/proposal/update.proposal.response";
import {UpdateProposalViewModel} from "@app/presentation/viewmodel/backoffice/proposal/update.proposal.viewmodel";

export interface UpdateProposalPresenterImpl {
    present(response: UpdateProposalResponse): UpdateProposalViewModel
}