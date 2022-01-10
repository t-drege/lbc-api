import {NewspaperStatusViewModel} from "@app/presentation/viewmodel/backoffice/newspaper.status/newspaper.status.viewmodel";
import {NewspaperStatusResponse} from "@app/domain/backoffice/response/newspaper.status/newspaper.status.response";

export interface NewspaperStatusPresenterImpl {
    present(response: NewspaperStatusResponse): NewspaperStatusViewModel
}