import {Module} from "@nestjs/common";
import {UpdateAbstractArticleController} from "@app/presentation/controller/backoffice/article/update.abstract.article.controller";
import {UpdateAbstractArticle} from "@app/domain/backoffice/usecase/article/update.abstract.article";
import {UpdateAbstractArticlePresenter} from "@app/presentation/presenter/backoffice/article/update.abstract.article.presenter";
import {UpdateAbstractArticleRepository} from "@app/infrastructure/repository/backoffice/article/update.abstract.article.repository";

@Module({
    controllers: [UpdateAbstractArticleController],
    providers: [
        UpdateAbstractArticle,
        {
            provide: 'UpdateAbstractArticlePresenterImpl',
            useClass: UpdateAbstractArticlePresenter
        }
        , {
            provide: 'UpdateAbstractArticleGateway',
            useClass: UpdateAbstractArticleRepository
        },
    ]
})
export class UpdateAbstractArticleModule {}