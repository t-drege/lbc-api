import {CreateProposalPresenterImpl} from "@app/domain/backoffice/presenter/proposal/create.proposal.presenter.impl";
import {CreateProposalResponse} from "@app/domain/backoffice/response/proposal/create.proposal.response";
import {CreateProposalViewModel} from "@app/presentation/viewmodel/backoffice/proposal/create.proposal.viewmodel";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class CreateProposalPresenter implements CreateProposalPresenterImpl {
    present(response: CreateProposalResponse): CreateProposalViewModel {
        return new CreateProposalViewModel(response.proposal, HttpStatus.CREATED)
    }

}