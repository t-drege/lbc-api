import {AddMediaPresenterImpl} from "@app/domain/backoffice/presenter/media/add.media.presenter.impl";
import {HttpStatus, Injectable} from "@nestjs/common";
import {AddMediaResponse} from "@app/domain/backoffice/response/media/add.media.response";
import {AddMediaViewModel} from "@app/presentation/viewmodel/backoffice/media/add.media.viewmodel";

@Injectable()
export class AddMediaPresenter implements AddMediaPresenterImpl {
    present(response: AddMediaResponse): AddMediaViewModel {
        return new AddMediaViewModel(response.media, HttpStatus.CREATED)
    }

}