import {UploadFileArticleRailwayPresenterImpl} from "@app/domain/backoffice/presenter/railway/upload.file.article.railway.presenter.impl";
import {UploadFileArticleRailwayViewModel} from "@app/presentation/viewmodel/backoffice/railway/upload.file.article.railway.viewmodel";
import {UploadFileArticleRailwayResponse} from "@app/domain/backoffice/response/railway/upload.file.article.railway.response";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class UploadFileArticleRailwayPresenter implements UploadFileArticleRailwayPresenterImpl {
    present(response: UploadFileArticleRailwayResponse): UploadFileArticleRailwayViewModel {
        return new UploadFileArticleRailwayViewModel(response.articleNewspaper, HttpStatus.OK)
    }

}