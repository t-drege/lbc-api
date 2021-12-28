import {AddArticleRailwayPresenterImpl} from "@app/domain/backoffice/presenter/railway/add.article.railway.presenter.impl";
import {Injectable} from "@nestjs/common";
import {AddArticleRailwayViewmodel} from "@app/presentation/viewmodel/backoffice/railway/add.article.railway.viewmodel";
import {AddArticleRailwayResponse} from "@app/domain/backoffice/response/railway/add.article.railway.response";

@Injectable()
export default class AddArticleRailwayPresenter implements AddArticleRailwayPresenterImpl {
    present(response: AddArticleRailwayResponse): AddArticleRailwayViewmodel {
        return undefined;
    }
}