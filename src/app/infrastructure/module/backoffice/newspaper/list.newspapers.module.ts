import {Module} from "@nestjs/common";
import {ListNewspapersController} from "@app/presentation/controller/backoffice/newspaper/list.newspapers.controller";
import {ListNewspapers} from "@app/domain/backoffice/usecase/newspaper/list.newspapers";
import {ListNewspapersPresenter} from "@app/presentation/presenter/backoffice/newspaper/list.newspapers.presenter";
import {ListNewspapersRepository} from "@app/infrastructure/repository/backoffice/newspaper/list.newspapers.repository";


@Module({
    controllers: [ListNewspapersController],
    providers: [
        ListNewspapers,
        {
            provide: 'ListNewspapersPresenterImpl',
            useClass: ListNewspapersPresenter
        }
        , {
            provide: 'ListNewspapersGateway',
            useClass: ListNewspapersRepository
        },
    ]
})
export class ListNewspapersModule {
}