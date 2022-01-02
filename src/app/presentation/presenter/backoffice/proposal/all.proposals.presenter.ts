import {HttpStatus, Injectable} from "@nestjs/common";
import {AllProposalsPresenterImpl} from "@app/domain/backoffice/presenter/proposal/all.proposals.presenter.impl";
import {AllProposalsViewModel} from "@app/presentation/viewmodel/backoffice/proposal/all.proposals.viewmodel";
import {AllProposalsResponse} from "@app/domain/backoffice/response/proposal/all.proposals.response";

@Injectable()
export class AllProposalsPresenter implements AllProposalsPresenterImpl {
    present(response: AllProposalsResponse): AllProposalsViewModel {
        return new AllProposalsViewModel(response.rows, HttpStatus.OK)
    }
}