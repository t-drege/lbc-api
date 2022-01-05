import {UpdateAbstractArticleResponse} from "@app/domain/backoffice/response/article/update.abstract.article.response";
import {UpdateAbstractArticleViewModel} from "@app/presentation/viewmodel/backoffice/article/update.abstract.article.viewmodel";

export interface UpdateAbstractArticlePresenterImpl {
    present(response: UpdateAbstractArticleResponse): UpdateAbstractArticleViewModel
}