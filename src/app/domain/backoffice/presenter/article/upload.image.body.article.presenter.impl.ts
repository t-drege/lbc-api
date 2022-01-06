import {UploadImageBodyArticleResponse} from "@app/domain/backoffice/response/article/upload.image.body.article.response";
import {UploadImageBodyArticleViewModel} from "@app/presentation/viewmodel/backoffice/article/upload.image.body.article.viewmodel";

export interface UploadImageBodyArticlePresenterImpl {
    present(response: UploadImageBodyArticleResponse): UploadImageBodyArticleViewModel
}