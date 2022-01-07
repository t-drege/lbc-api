import {AddMediaResponse} from "@app/domain/backoffice/response/media/add.media.response";
import {AddMediaViewModel} from "@app/presentation/viewmodel/backoffice/media/add.media.viewmodel";

export interface AddMediaPresenterImpl {
    present(response: AddMediaResponse): AddMediaViewModel
}