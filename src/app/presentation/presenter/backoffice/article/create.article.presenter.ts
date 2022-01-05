import {HttpStatus, Injectable} from "@nestjs/common";
import {CreateArticlePresenterImpl} from "@app/domain/backoffice/presenter/article/create.article.presenter.impl";
import {CreateArticleResponse} from "@app/domain/backoffice/response/article/create.article.response";
import {CreateArticleViewModel} from "@app/presentation/viewmodel/backoffice/article/create.article.viewmodel";

@Injectable()
export class CreateArticlePresenter implements CreateArticlePresenterImpl{
    present(response: CreateArticleResponse): CreateArticleViewModel {
        return new CreateArticleViewModel(response.article, HttpStatus.CREATED)
    }

}