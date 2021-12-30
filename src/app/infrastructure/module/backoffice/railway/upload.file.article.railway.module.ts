import {Module} from "@nestjs/common";
import {UploadFileArticleRailwayController} from "@app/presentation/controller/backoffice/railway/upload.file.article.railway.controller";
import {UploadFileArticleRailway} from "@app/domain/backoffice/usecase/railway/upload.file.article.railway";
import {UploadFileArticleRailwayPresenter} from "@app/presentation/presenter/backoffice/railway/upload.file.article.railway.presenter";
import {UploadFileArticleRailwayRepository} from "@app/infrastructure/repository/backoffice/railway/upload.file.article.railway.repository";
import {NextCloudModule} from "@app/application/webdav/nextcloud.module";

@Module({
    controllers: [UploadFileArticleRailwayController],
    providers: [
        UploadFileArticleRailway,
        {
            provide: 'UploadFileArticleRailwayPresenterImpl',
            useClass: UploadFileArticleRailwayPresenter
        }
        , {
            provide: 'UploadFileArticleRailwayGateway',
            useClass: UploadFileArticleRailwayRepository
        },
    ],
})
export class UploadFileArticleRailwayModule {

}