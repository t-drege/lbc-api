import {PublishArticlePresenterImpl} from "@app/domain/backoffice/presenter/article/publish.article.presenter.impl";
import {PublishArticleResponse} from "@app/domain/backoffice/response/article/publish.article.response";
import {PublishArticleViewModel} from "@app/presentation/viewmodel/backoffice/article/publish.article.viewmodel";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class PublishArticlePresenter implements PublishArticlePresenterImpl{
    present(response: PublishArticleResponse): PublishArticleViewModel {
        return new PublishArticleViewModel(response.article, HttpStatus.OK);
    }

}