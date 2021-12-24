import {Module} from "@nestjs/common";
import {UpdateNewspaperController} from "@app/presentation/controller/backoffice/newspaper/update.newspaper.controller";
import {UpdateNewspaper} from "@app/domain/backoffice/usecase/newspaper/update.newspaper";
import {UpdateNewspaperPresenter} from "@app/presentation/presenter/backoffice/newspaper/update.newspaper.presenter";
import {UpdateNewspaperRepository} from "@app/infrastructure/repository/backoffice/newspaper/update.newspaper.repository";

@Module({
    controllers: [UpdateNewspaperController],
    providers: [
        UpdateNewspaper,
        {
            provide: 'UpdateNewspaperPresenterImpl',
            useClass: UpdateNewspaperPresenter
        }
        , {
            provide: 'UpdateNewspaperGateway',
            useClass: UpdateNewspaperRepository
        },
    ]
})
export class UpdateNewspaperModule {
}