import {Module} from "@nestjs/common";
import {UploadImageBodyArticleController} from "@app/presentation/controller/backoffice/article/upload.image.body.article.controller";
import {UploadImageBodyArticle} from "@app/domain/backoffice/usecase/article/upload.image.body.article";
import {UploadImageBodyArticlePresenter} from "@app/presentation/presenter/backoffice/article/upload.image.body.article.presenter";
import {UploadImageBodyArticleRepository} from "@app/infrastructure/repository/backoffice/article/upload.image.body.article.repository";

@Module({
    controllers: [UploadImageBodyArticleController],
    providers: [
        UploadImageBodyArticle,
        {
            provide: 'UploadImageBodyArticlePresenterImpl',
            useClass: UploadImageBodyArticlePresenter
        }
        , {
            provide: 'UploadImageBodyArticleGateway',
            useClass: UploadImageBodyArticleRepository
        },
    ]
})
export class UploadImageBodyArticleModule {
}