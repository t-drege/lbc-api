import {UploadImageBodyArticlePresenterImpl} from "@app/domain/backoffice/presenter/article/upload.image.body.article.presenter.impl";
import {UploadImageBodyArticleResponse} from "@app/domain/backoffice/response/article/upload.image.body.article.response";
import {UploadImageBodyArticleViewModel} from "@app/presentation/viewmodel/backoffice/article/upload.image.body.article.viewmodel";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class UploadImageBodyArticlePresenter implements UploadImageBodyArticlePresenterImpl {
    present(response: UploadImageBodyArticleResponse): UploadImageBodyArticleViewModel {
        return new UploadImageBodyArticleViewModel({url: response.urlImageArticle}, HttpStatus.CREATED);
    }

}