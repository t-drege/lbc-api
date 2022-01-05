import {CreateArticleResponse} from "@app/domain/backoffice/response/article/create.article.response";
import {CreateArticleViewModel} from "@app/presentation/viewmodel/backoffice/article/create.article.viewmodel";

export interface CreateArticlePresenterImpl {
    present(response: CreateArticleResponse): CreateArticleViewModel
}