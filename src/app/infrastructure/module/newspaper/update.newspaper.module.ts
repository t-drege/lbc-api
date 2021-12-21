import {Module} from "@nestjs/common";
import {UpdateNewspaperController} from "@app/presentation/controller/newspaper/update.newspaper.controller";
import {UpdateNewspaper} from "@app/domain/backoffice/usecase/newspaper/update.newspaper";
import {UpdateNewspaperPresenter} from "@app/presentation/presenter/newspaper/update.newspaper.presenter";
import {UpdateNewspaperRepository} from "@app/infrastructure/repository/newspaper/update.newspaper.repository";

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