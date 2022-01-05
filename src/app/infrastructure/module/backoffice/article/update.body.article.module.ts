import {Module} from "@nestjs/common";
import {UpdateBodyArticle} from "@app/domain/backoffice/usecase/article/update.body.article";
import {UpdateBodyArticleController} from "@app/presentation/controller/backoffice/article/update.body.article.controller";
import {UpdateBodyArticlePresenter} from "@app/presentation/presenter/backoffice/article/update.body.article.presenter";
import {UpdateBodyArticleRepository} from "@app/infrastructure/repository/backoffice/article/update.body.article.repository";

@Module({
    controllers: [UpdateBodyArticleController],
    providers: [
        UpdateBodyArticle,
        {
            provide: 'UpdateBodyArticlePresenterImpl',
            useClass: UpdateBodyArticlePresenter
        }
        , {
            provide: 'UpdateBodyArticleGateway',
            useClass: UpdateBodyArticleRepository
        },
    ]
})
export class UpdateBodyArticleModule {
}