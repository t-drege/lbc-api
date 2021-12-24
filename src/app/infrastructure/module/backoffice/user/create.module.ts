import {Module} from "@nestjs/common";
import {CreateController} from "@app/presentation/controller/backoffice/user/create.controller";
import CreateUsecase from "@app/domain/backoffice/usecase/user/create.usecase";
import {CreateRepository} from "@app/infrastructure/repository/backoffice/user/create.repository";
import CreatePresenter from "@app/presentation/presenter/backoffice/user/create.presenter";

@Module({
    controllers: [CreateController],
    providers: [
        CreateUsecase,
        {
            provide: 'ICreatePresenter',
            useClass: CreatePresenter
        }
        , {
            provide: 'CreateGateway',
            useClass: CreateRepository
        },
    ]
})
export class CreateModule {
}