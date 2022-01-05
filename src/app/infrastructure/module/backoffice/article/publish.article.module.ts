import {Module} from "@nestjs/common";
import {PublishArticleRepository} from "@app/infrastructure/repository/backoffice/article/publish.article.repository";
import {PublishArticlePresenter} from "@app/presentation/presenter/backoffice/article/publish.article.presenter";
import {PublishArticle} from "@app/domain/backoffice/usecase/article/publish.article";
import {PublishArticleController} from "@app/presentation/controller/backoffice/article/publish.article.controller";

@Module({
    controllers: [PublishArticleController],
    providers: [
        PublishArticle,
        {
            provide: 'PublishArticlePresenterImpl',
            useClass: PublishArticlePresenter
        }
        , {
            provide: 'PublishArticleGateway',
            useClass: PublishArticleRepository
        },
    ]
})
export class PublishArticleModule {

}