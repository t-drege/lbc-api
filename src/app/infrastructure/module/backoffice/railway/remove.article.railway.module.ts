import {Module} from "@nestjs/common";
import {RemoveArticleRailway} from "@app/domain/backoffice/usecase/railway/remove.article.railway";
import {RemoveArticleRailwayController} from "@app/presentation/controller/backoffice/railway/remove.article.railway.controller";
import {RemoveArticleRailwayPresenter} from "@app/presentation/presenter/backoffice/railway/remove.article.railway.presenter";
import {RemoveArticleRailwayRepository} from "@app/infrastructure/repository/backoffice/railway/remove.article.railway.repository";

@Module({
    controllers: [RemoveArticleRailwayController],
    providers: [
        RemoveArticleRailway,
        {
            provide: 'RemoveArticleRailwayPresenterImpl',
            useClass: RemoveArticleRailwayPresenter
        }
        , {
            provide: 'RemoveArticleRailwayGateway',
            useClass: RemoveArticleRailwayRepository
        },
    ]
})
export class RemoveArticleRailwayModule {}