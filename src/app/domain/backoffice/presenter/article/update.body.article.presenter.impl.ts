import {UpdateBodyArticleResponse} from "@app/domain/backoffice/response/article/update.body.article.response";
import {UpdateBodyArticleViewModel} from "@app/presentation/viewmodel/backoffice/article/update.body.article.viewmodel";

export interface UpdateBodyArticlePresenterImpl {
    present(response: UpdateBodyArticleResponse): UpdateBodyArticleViewModel
}