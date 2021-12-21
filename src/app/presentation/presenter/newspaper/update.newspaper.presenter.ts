import {UpdateNewspaperPresenterImpl} from "@app/domain/backoffice/presenter/newspaper/update.newspaper.presenter.impl";
import {HttpStatus, Injectable} from "@nestjs/common";
import {UpdateNewspaperViewModel} from "@app/presentation/viewmodel/newspaper/update.newspaper.viewmodel";
import {UpdateNewspaperResponse} from "@app/domain/backoffice/response/newspaper/update.newspaper.response";

@Injectable()
export class UpdateNewspaperPresenter implements UpdateNewspaperPresenterImpl {
    async present(response: Promise<UpdateNewspaperResponse>): Promise<UpdateNewspaperViewModel> {
        const res: UpdateNewspaperResponse = await response;
        let statusCode = HttpStatus.OK

        if (res.newspaper == null) {
            statusCode = HttpStatus.NOT_FOUND
        }

        return new UpdateNewspaperViewModel(res.newspaper, statusCode)
    }

}