import {Module} from "@nestjs/common";
import {AllArticlesRailway} from "@app/domain/backoffice/usecase/railway/all.articles.railway";
import {AllArticlesRailwayController} from "@app/presentation/controller/backoffice/railway/all.articles.railway.controller";
import {AllArticlesRailwayPresenter} from "@app/presentation/presenter/backoffice/railway/all.articles.railway.presenter";
import {AllArticlesRailwayRepository} from "@app/infrastructure/repository/backoffice/railway/all.articles.railway.repository";

@Module({
    controllers: [AllArticlesRailwayController],
    providers: [
        AllArticlesRailway,
        {
            provide: 'AllArticlesRailwayPresenterImpl',
            useClass: AllArticlesRailwayPresenter
        }
        , {
            provide: 'AllArticlesRailwayGateway',
            useClass: AllArticlesRailwayRepository
        },
    ]
})
export class AllArticlesRailwayModule {}