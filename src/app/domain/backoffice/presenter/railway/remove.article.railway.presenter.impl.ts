import {RemoveArticleRailwayResponse} from "@app/domain/backoffice/response/railway/remove.article.railway.response";
import {RemoveArticleRailwayViewModel} from "@app/presentation/viewmodel/backoffice/railway/remove.article.railway.viewmodel";

export interface RemoveArticleRailwayPresenterImpl {
    present(response: RemoveArticleRailwayResponse): RemoveArticleRailwayViewModel
}