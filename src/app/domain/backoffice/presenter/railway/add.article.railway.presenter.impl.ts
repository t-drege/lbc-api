import {AddArticleRailwayResponse} from "@app/domain/backoffice/response/railway/add.article.railway.response";
import {AddArticleRailwayViewModel} from "@app/presentation/viewmodel/backoffice/railway/add.article.railway.viewmodel";

export interface AddArticleRailwayPresenterImpl {
    present(response: AddArticleRailwayResponse) : AddArticleRailwayViewModel
}