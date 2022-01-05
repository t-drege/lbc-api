import {UpdateBodyArticlePresenterImpl} from "@app/domain/backoffice/presenter/article/update.body.article.presenter.impl";
import {UpdateBodyArticleResponse} from "@app/domain/backoffice/response/article/update.body.article.response";
import {UpdateBodyArticleViewModel} from "@app/presentation/viewmodel/backoffice/article/update.body.article.viewmodel";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class UpdateBodyArticlePresenter implements UpdateBodyArticlePresenterImpl {
    present(response: UpdateBodyArticleResponse): UpdateBodyArticleViewModel {
        return new UpdateBodyArticleViewModel(response.bodyHtml, HttpStatus.OK)
    }
}