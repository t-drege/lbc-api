import {Module} from "@nestjs/common";
import {ReadAllArticleController} from "@app/presentation/controller/backoffice/article/read.all.article.controller";
import {ReadAllArticle} from "@app/domain/backoffice/usecase/article/read.all.article";
import {ReadAllArticlePresenter} from "@app/presentation/presenter/backoffice/article/read.all.article.presenter";
import {ReadAllArticleRepository} from "@app/infrastructure/repository/backoffice/article/read.all.article.repository";

@Module({
    controllers: [ReadAllArticleController],
    providers: [
        ReadAllArticle,
        {
            provide: 'ReadAllArticlePresenterImpl',
            useClass: ReadAllArticlePresenter
        }
        , {
            provide: 'ReadAllArticleGateway',
            useClass: ReadAllArticleRepository
        },
    ]
})
export class ReadAllArticleModule {}