import {ListNewspaperResponse} from "@app/domain/backoffice/response/newspaper/list.newspaper.response";
import {ListNewspapersViewModel} from "@app/presentation/viewmodel/newspaper/list.newspapers.viewmodel";

export interface ListNewspapersPresenterImpl {
    present(response: Promise<ListNewspaperResponse>): Promise<ListNewspapersViewModel>
}