import {UpdateAbstractArticlePresenterImpl} from "@app/domain/backoffice/presenter/article/update.abstract.article.presenter.impl";
import {HttpStatus, Injectable} from "@nestjs/common";
import {UpdateAbstractArticleViewModel} from "@app/presentation/viewmodel/backoffice/article/update.abstract.article.viewmodel";
import {UpdateAbstractArticleResponse} from "@app/domain/backoffice/response/article/update.abstract.article.response";

@Injectable()
export class UpdateAbstractArticlePresenter implements UpdateAbstractArticlePresenterImpl {
    present(response: UpdateAbstractArticleResponse): UpdateAbstractArticleViewModel {
        return new UpdateAbstractArticleViewModel(response.article, HttpStatus.OK);
    }
}