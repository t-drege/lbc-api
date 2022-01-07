import {ReadAllMediaPresenterImpl} from "@app/domain/backoffice/presenter/media/read.all.media.presenter.impl";
import {HttpStatus, Injectable} from "@nestjs/common";
import {ReadAllMediaResponse} from "@app/domain/backoffice/response/media/read.all.media.response";
import {ReadAllMediaViewModel} from "@app/presentation/viewmodel/backoffice/media/read.all.media.viewmodel";

@Injectable()
export class ReadAllMediaPresenter implements ReadAllMediaPresenterImpl{
    present(response: ReadAllMediaResponse): ReadAllMediaViewModel {
        return new ReadAllMediaViewModel(response.rows, HttpStatus.OK)
    }

}