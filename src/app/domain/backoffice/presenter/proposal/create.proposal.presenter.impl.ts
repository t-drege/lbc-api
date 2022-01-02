import {CreateProposalResponse} from "@app/domain/backoffice/response/proposal/create.proposal.response";
import {CreateProposalViewModel} from "@app/presentation/viewmodel/backoffice/proposal/create.proposal.viewmodel";

export interface CreateProposalPresenterImpl {
    present(response: CreateProposalResponse): CreateProposalViewModel
}