import {ReadAllArticlePresenterImpl} from "@app/domain/backoffice/presenter/article/read.all.article.presenter.impl";
import {ReadAllProductViewModel} from "@app/presentation/viewmodel/backoffice/product/read.all.product.viewmodel";
import {ReadAllArticleResponse} from "@app/domain/backoffice/response/article/read.all.article.response";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class ReadAllArticlePresenter implements ReadAllArticlePresenterImpl{
    present(response: ReadAllArticleResponse): ReadAllProductViewModel {
        return new ReadAllProductViewModel(response.rows, HttpStatus.OK);
    }

}