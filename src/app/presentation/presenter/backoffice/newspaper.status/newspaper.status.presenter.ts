import {NewspaperStatusPresenterImpl} from "@app/domain/backoffice/presenter/newspaper.status/newspaper.status.presenter.impl";
import {NewspaperStatusResponse} from "@app/domain/backoffice/response/newspaper.status/newspaper.status.response";
import {NewspaperStatusViewModel} from "@app/presentation/viewmodel/backoffice/newspaper.status/newspaper.status.viewmodel";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class NewspaperStatusPresenter implements NewspaperStatusPresenterImpl {
    present(response: NewspaperStatusResponse): NewspaperStatusViewModel {
        return new NewspaperStatusViewModel(response.newspaperStatus, HttpStatus.OK);
    }

}