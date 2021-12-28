import {UpdateArticleRailwayResponse} from "@app/domain/backoffice/response/railway/update.article.railway.response";
import {UpdateArticleRailwayViewModel} from "@app/presentation/viewmodel/backoffice/railway/update.article.railway.viewmodel";

export interface UpdateArticleRailwayPresenterImpl {
    present(response: UpdateArticleRailwayResponse): UpdateArticleRailwayViewModel
}