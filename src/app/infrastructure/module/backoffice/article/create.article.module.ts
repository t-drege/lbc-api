import {Module} from "@nestjs/common";
import {CreateArticleController} from "@app/presentation/controller/backoffice/article/create.article.controller";
import {CreateArticle} from "@app/domain/backoffice/usecase/article/create.article";
import {CreateArticlePresenter} from "@app/presentation/presenter/backoffice/article/create.article.presenter";
import {CreateArticleRepository} from "@app/infrastructure/repository/backoffice/article/create.article.repository";

@Module({
    controllers: [CreateArticleController],
    providers: [
        CreateArticle,
        {
            provide: 'CreateArticlePresenterImpl',
            useClass: CreateArticlePresenter
        }
        , {
            provide: 'CreateArticleGateway',
            useClass: CreateArticleRepository
        },
    ]
})
export class CreateArticleModule {
}