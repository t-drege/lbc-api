import {DeleteNewspaperResponse} from "@app/domain/backoffice/response/newspaper/delete.newspaper.response";
import {DeleteNewspaperViewModel} from "@app/presentation/viewmodel/backoffice/newspaper/delete.newspaper.viewmodel";

export interface DeleteNewspaperPresenterImpl {
    present(response: DeleteNewspaperResponse): DeleteNewspaperViewModel
}