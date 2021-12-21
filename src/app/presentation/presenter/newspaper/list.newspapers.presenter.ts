import {ListNewspapersPresenterImpl} from "@app/domain/backoffice/presenter/newspaper/list.newspapers.presenter.impl";
import {ListNewspapersViewModel} from "@app/presentation/viewmodel/newspaper/list.newspapers.viewmodel";
import {ListNewspaperResponse} from "@app/domain/backoffice/response/newspaper/list.newspaper.response";
import {HttpStatus} from "@nestjs/common";

export class ListNewspapersPresenter implements ListNewspapersPresenterImpl {
    async present(response: Promise<ListNewspaperResponse>): Promise<ListNewspapersViewModel> {

        const res: ListNewspaperResponse = await response
        let statusCode = HttpStatus.OK

        if (res.rows.rows.length == 0) {
            statusCode = HttpStatus.NO_CONTENT
        }

        return new ListNewspapersViewModel(res.rows, statusCode)
    }

}