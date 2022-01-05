import {PublishArticleResponse} from "@app/domain/backoffice/response/article/publish.article.response";
import {PublishArticleViewModel} from "@app/presentation/viewmodel/backoffice/article/publish.article.viewmodel";

export interface PublishArticlePresenterImpl {
    present(response: PublishArticleResponse): PublishArticleViewModel
}