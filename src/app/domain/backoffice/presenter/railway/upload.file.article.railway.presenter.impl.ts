import {UploadFileArticleRailwayResponse} from "@app/domain/backoffice/response/railway/upload.file.article.railway.response";
import {UploadFileArticleRailwayViewModel} from "@app/presentation/viewmodel/backoffice/railway/upload.file.article.railway.viewmodel";

export interface UploadFileArticleRailwayPresenterImpl {
    present(response: UploadFileArticleRailwayResponse): UploadFileArticleRailwayViewModel
}