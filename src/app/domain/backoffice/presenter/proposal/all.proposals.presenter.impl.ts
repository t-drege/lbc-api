import {AllProposalsResponse} from "@app/domain/backoffice/response/proposal/all.proposals.response";
import {AllProposalsViewModel} from "@app/presentation/viewmodel/backoffice/proposal/all.proposals.viewmodel";

export interface AllProposalsPresenterImpl {
    present(response: AllProposalsResponse): AllProposalsViewModel
}