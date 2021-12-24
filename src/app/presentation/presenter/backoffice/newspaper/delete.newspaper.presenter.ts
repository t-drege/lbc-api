import {DeleteNewspaperPresenterImpl} from "@app/domain/backoffice/presenter/newspaper/delete.newspaper.presenter.impl";
import {DeleteNewspaperViewModel} from "@app/presentation/viewmodel/backoffice/newspaper/delete.newspaper.viewmodel";
import {DeleteNewspaperResponse} from "@app/domain/backoffice/response/newspaper/delete.newspaper.response";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class DeleteNewspaperPresenter implements DeleteNewspaperPresenterImpl {

    present(response: DeleteNewspaperResponse): DeleteNewspaperViewModel {
        let statusCode =  HttpStatus.NO_CONTENT
        if(response.numberObjectDeleted == 0) {
            statusCode = HttpStatus.NOT_FOUND
        }
        return new DeleteNewspaperViewModel(response.numberObjectDeleted.toString(), statusCode)
    }

}