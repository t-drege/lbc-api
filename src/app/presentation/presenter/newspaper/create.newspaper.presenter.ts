import {CreateNewspaperPresenterImpl} from "@app/domain/backoffice/presenter/newspaper/create.newspaper.presenter.impl";
import {CreateNewspaperViewModel} from "@app/presentation/viewmodel/newspaper/create.newspaper.viewmodel";
import {CreateNewspaperResponse} from "@app/domain/backoffice/response/newspaper/create.newspaper.response";
import {HttpStatus} from "@nestjs/common";

export class CreateNewspaperPresenter implements CreateNewspaperPresenterImpl {
    present(response: CreateNewspaperResponse): CreateNewspaperViewModel {
        return new CreateNewspaperViewModel(response.newspaper, HttpStatus.CREATED)
    }
}