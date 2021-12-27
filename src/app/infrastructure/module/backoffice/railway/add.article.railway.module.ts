import {Module} from "@nestjs/common";
import {CreateController} from "@app/presentation/controller/backoffice/user/create.controller";
import CreateUsecase from "@app/domain/backoffice/usecase/user/create.usecase";
import CreatePresenter from "@app/presentation/presenter/backoffice/user/create.presenter";
import {CreateRepository} from "@app/infrastructure/repository/backoffice/user/create.repository";
import {AddArticleRailwayController} from "@app/presentation/controller/backoffice/railway/add.article.railway.controller";
import {AddArticleRailway} from "@app/domain/backoffice/usecase/railway/add.article.railway";
import {AddArticleRailwayPresenter} from "@app/presentation/presenter/backoffice/railway/add.article.railway.presenter";
import {AddArticleRailwayRepository} from "@app/infrastructure/repository/backoffice/railway/add.article.railway.repository";

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