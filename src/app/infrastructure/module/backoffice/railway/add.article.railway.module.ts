import {Module} from "@nestjs/common";
import {AddArticleRailwayController} from "@app/presentation/controller/backoffice/railway/add.article.railway.controller";
import {AddArticleRailway} from "@app/domain/backoffice/usecase/railway/add.article.railway";
import {AddArticleRailwayRepository} from "@app/infrastructure/repository/backoffice/railway/add.article.railway.repository";
import AddArticleRailwayPresenter from "@app/presentation/presenter/backoffice/railway/add.article.railway.presenter";

@Module({
    controllers: [AddArticleRailwayController],
    providers: [
        AddArticleRailway,
        {
            provide: 'AddArticleRailwayPresenterImpl',
            useClass: AddArticleRailwayPresenter
        }
        , {
            provide: 'AddArticleRailwayGateway',
            useClass: AddArticleRailwayRepository
        },
    ]
})
export class AddArticleRailwayModule {}