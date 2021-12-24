import {CreateNewspaperViewModel} from "@app/presentation/viewmodel/backoffice/newspaper/create.newspaper.viewmodel";
import {CreateNewspaperResponse} from "@app/domain/backoffice/response/newspaper/create.newspaper.response";

export interface CreateNewspaperPresenterImpl {
    present(response: CreateNewspaperResponse): CreateNewspaperViewModel
}