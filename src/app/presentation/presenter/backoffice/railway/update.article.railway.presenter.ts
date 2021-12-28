import {HttpCode, HttpStatus, Injectable} from "@nestjs/common";
import {UpdateArticleRailwayPresenterImpl} from "@app/domain/backoffice/presenter/railway/update.article.railway.presenter.impl";
import {UpdateNewspaperResponse} from "@app/domain/backoffice/response/newspaper/update.newspaper.response";
import {UpdateNewspaperViewModel} from "@app/presentation/viewmodel/backoffice/newspaper/update.newspaper.viewmodel";
import {UpdateArticleRailwayResponse} from "@app/domain/backoffice/response/railway/update.article.railway.response";
import {UpdateArticleRailwayViewModel} from "@app/presentation/viewmodel/backoffice/railway/update.article.railway.viewmodel";

@Injectable()
export class UpdateArticleRailwayPresenter implements UpdateArticleRailwayPresenterImpl {
    present(response: UpdateArticleRailwayResponse): UpdateArticleRailwayViewModel {
        return new UpdateArticleRailwayViewModel(response.articleNewspaper, HttpStatus.OK)
    }
}