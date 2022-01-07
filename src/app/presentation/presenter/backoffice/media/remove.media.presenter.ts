import {RemoveMediaPresenterImpl} from "@app/domain/backoffice/presenter/media/remove.media.presenter.impl";
import {RemoveMediaResponse} from "@app/domain/backoffice/response/media/remove.media.response";
import {RemoveMediaViewModel} from "@app/presentation/viewmodel/backoffice/media/remove.media.viewmodel";
import {HttpStatus} from "@nestjs/common";

export class RemoveMediaPresenter implements RemoveMediaPresenterImpl{
    present(response: RemoveMediaResponse): RemoveMediaViewModel {
        return new RemoveMediaViewModel(response.numberMediaDeleted.toString(), HttpStatus.OK);
    }

}