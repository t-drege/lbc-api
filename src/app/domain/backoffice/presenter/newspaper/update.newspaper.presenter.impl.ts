import {UpdateNewspaperResponse} from "@app/domain/backoffice/response/newspaper/update.newspaper.response";
import {UpdateNewspaperViewModel} from "@app/presentation/viewmodel/newspaper/update.newspaper.viewmodel";

export interface UpdateNewspaperPresenterImpl {
    present(response: UpdateNewspaperResponse): UpdateNewspaperViewModel
}