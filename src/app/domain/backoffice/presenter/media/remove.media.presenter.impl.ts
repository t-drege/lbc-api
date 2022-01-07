import {RemoveMediaResponse} from "@app/domain/backoffice/response/media/remove.media.response";
import {RemoveMediaViewModel} from "@app/presentation/viewmodel/backoffice/media/remove.media.viewmodel";

export interface RemoveMediaPresenterImpl {
    present(response: RemoveMediaResponse): RemoveMediaViewModel
}