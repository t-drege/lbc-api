import {AllArticlesRailwayResponse} from "@app/domain/backoffice/response/railway/all.articles.railway.response";
import {AllArticlesRailwayViewModel} from "@app/presentation/viewmodel/backoffice/railway/all.articles.railway.viewmodel";

export interface AllArticlesRailwayPresenterImpl {
    present(response: AllArticlesRailwayResponse): AllArticlesRailwayViewModel
}