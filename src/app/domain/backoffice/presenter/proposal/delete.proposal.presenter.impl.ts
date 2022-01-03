import {DeleteProposalResponse} from "@app/domain/backoffice/response/proposal/delete.proposal.response";
import {DeleteProposalViewModel} from "@app/presentation/viewmodel/backoffice/proposal/delete.proposal.viewmodel";

export interface DeleteProposalPresenterImpl {
    present(response: DeleteProposalResponse): DeleteProposalViewModel
}