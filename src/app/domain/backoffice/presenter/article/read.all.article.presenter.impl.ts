import {ReadAllArticleResponse} from "@app/domain/backoffice/response/article/read.all.article.response";
import {ReadAllProductViewModel} from "@app/presentation/viewmodel/backoffice/product/read.all.product.viewmodel";

export interface ReadAllArticlePresenterImpl {
    present(response:ReadAllArticleResponse): ReadAllProductViewModel
}