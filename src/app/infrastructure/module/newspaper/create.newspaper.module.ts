import {Module} from "@nestjs/common";
import {CreateNewspaperPresenter} from "@app/presentation/presenter/newspaper/create.newspaper.presenter";
import {CreateNewspaperRepository} from "@app/infrastructure/repository/newspaper/create.newspaper.repository";
import {CreateNewspaper} from "@app/domain/backoffice/usecase/newspaper/create.newspaper";
import {CreateNewspaperController} from "@app/presentation/controller/newspaper/create.newspaper.controller";

@Module({
    controllers: [CreateNewspaperController],
    providers: [
        CreateNewspaper,
        {
            provide: 'CreateNewspaperPresenterImpl',
            useClass: CreateNewspaperPresenter
        }
        , {
            provide: 'CreateNewspaperGateway',
            useClass: CreateNewspaperRepository
        },
    ],
})
export class CreateNewspaperModule {
}