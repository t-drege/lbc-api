import {DeleteProposalPresenterImpl} from "@app/domain/backoffice/presenter/proposal/delete.proposal.presenter.impl";
import {DeleteProposalResponse} from "@app/domain/backoffice/response/proposal/delete.proposal.response";
import {DeleteProposalViewModel} from "@app/presentation/viewmodel/backoffice/proposal/delete.proposal.viewmodel";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class DeleteProposalPresenter implements DeleteProposalPresenterImpl {
    present(response: DeleteProposalResponse): DeleteProposalViewModel {
        return new DeleteProposalViewModel(response.numberObjectDeleted.toString(), HttpStatus.NO_CONTENT);
    }
}
