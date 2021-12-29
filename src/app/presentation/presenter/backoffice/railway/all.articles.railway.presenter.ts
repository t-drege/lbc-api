import {AllArticlesRailwayPresenterImpl} from "@app/domain/backoffice/presenter/railway/all.articles.railway.presenter.impl";
import {AllArticlesRailwayViewModel} from "@app/presentation/viewmodel/backoffice/railway/all.articles.railway.viewmodel";
import {AllArticlesRailwayResponse} from "@app/domain/backoffice/response/railway/all.articles.railway.response";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class AllArticlesRailwayPresenter implements AllArticlesRailwayPresenterImpl {
    present(response: AllArticlesRailwayResponse): AllArticlesRailwayViewModel {
        return new AllArticlesRailwayViewModel(response.articlesNewspaper, HttpStatus.OK)
    }
}