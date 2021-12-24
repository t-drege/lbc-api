import {Module} from "@nestjs/common";
import {DeleteNewspaperController} from "@app/presentation/controller/backoffice/newspaper/delete.newspaper.controller";
import {DeleteNewspaper} from "@app/domain/backoffice/usecase/newspaper/delete.newspaper";
import {DeleteNewspaperPresenter} from "@app/presentation/presenter/backoffice/newspaper/delete.newspaper.presenter";
import {DeleteNewspaperRepository} from "@app/infrastructure/repository/backoffice/newspaper/delete.newspaper.repository";

@Module({
    controllers: [DeleteNewspaperController],
    providers: [
        DeleteNewspaper,
        {
            provide: 'DeleteNewspaperPresenterImpl',
            useClass: DeleteNewspaperPresenter
        }
        , {
            provide: 'DeleteNewspaperGateway',
            useClass: DeleteNewspaperRepository
        },
    ]
})
export class DeleteNewspaperModule {}