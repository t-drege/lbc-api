import {UpdateProposalPresenterImpl} from "@app/domain/backoffice/presenter/proposal/update.proposal.presenter.impl";
import {UpdateProposalResponse} from "@app/domain/backoffice/response/proposal/update.proposal.response";
import {UpdateProposalViewModel} from "@app/presentation/viewmodel/backoffice/proposal/update.proposal.viewmodel";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class UpdateProposalPresenter implements UpdateProposalPresenterImpl{

    present(response: UpdateProposalResponse): UpdateProposalViewModel {
        return new UpdateProposalViewModel(response.proposal, HttpStatus.OK);
    }

}