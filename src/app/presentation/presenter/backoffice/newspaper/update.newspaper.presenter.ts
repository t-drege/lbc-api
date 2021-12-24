import {UpdateNewspaperPresenterImpl} from "@app/domain/backoffice/presenter/newspaper/update.newspaper.presenter.impl";
import {HttpStatus, Injectable} from "@nestjs/common";
import {UpdateNewspaperViewModel} from "@app/presentation/viewmodel/backoffice/newspaper/update.newspaper.viewmodel";
import {UpdateNewspaperResponse} from "@app/domain/backoffice/response/newspaper/update.newspaper.response";

@Injectable()
export class UpdateNewspaperPresenter implements UpdateNewspaperPresenterImpl {
     present(response: UpdateNewspaperResponse): UpdateNewspaperViewModel {
        const res: UpdateNewspaperResponse = response;
        let statusCode = HttpStatus.OK

        if (res.newspaper == null) {
            statusCode = HttpStatus.NOT_FOUND
        }

        return new UpdateNewspaperViewModel(res.newspaper, statusCode)
    }

}