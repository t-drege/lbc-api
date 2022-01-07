import {ReadAllMediaResponse} from "@app/domain/backoffice/response/media/read.all.media.response";
import {ReadAllMediaViewModel} from "@app/presentation/viewmodel/backoffice/media/read.all.media.viewmodel";

export interface ReadAllMediaPresenterImpl {
    present(response: ReadAllMediaResponse): ReadAllMediaViewModel
}