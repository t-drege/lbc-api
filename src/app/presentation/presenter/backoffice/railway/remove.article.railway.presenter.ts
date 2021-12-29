import {RemoveArticleRailwayPresenterImpl} from "@app/domain/backoffice/presenter/railway/remove.article.railway.presenter.impl";
import {RemoveArticleRailwayResponse} from "@app/domain/backoffice/response/railway/remove.article.railway.response";
import {RemoveArticleRailwayViewModel} from "@app/presentation/viewmodel/backoffice/railway/remove.article.railway.viewmodel";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class RemoveArticleRailwayPresenter implements RemoveArticleRailwayPresenterImpl {
    present(response: RemoveArticleRailwayResponse): RemoveArticleRailwayViewModel {
        return new RemoveArticleRailwayViewModel(response.numberArticleRemoved, HttpStatus.NO_CONTENT)
    }
}