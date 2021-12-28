import {Module} from "@nestjs/common";
import {UpdateArticleRailwayController} from "@app/presentation/controller/backoffice/railway/update.article.railway.controller";
import {UpdateArticleRailway} from "@app/domain/backoffice/usecase/railway/update.article.railway";
import {UpdateArticleRailwayPresenter} from "@app/presentation/presenter/backoffice/railway/update.article.railway.presenter";
import {UpdateArticleRailwayRepository} from "@app/infrastructure/repository/backoffice/railway/update.article.railway.repository";

@Module({
    controllers: [UpdateArticleRailwayController],
    providers: [
        UpdateArticleRailway,
        {
            provide: 'UpdateArticleRailwayPresenterImpl',
            useClass: UpdateArticleRailwayPresenter
        }
        , {
            provide: 'UpdateArticleRailwayGateway',
            useClass: UpdateArticleRailwayRepository
        },
    ]
})
export class UpdateArticleRailwayModule {}