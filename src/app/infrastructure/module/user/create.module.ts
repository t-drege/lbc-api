import {Module} from "@nestjs/common";
import {CreateController} from "@app/presentation/controller/user/create.controller";
import CreateUsecase from "@app/domain/backoffice/usecase/user/create.usecase";
import {CreateRepository} from "@app/infrastructure/repository/user/create.repository";
import CreatePresenter from "@app/presentation/presenter/user/create.presenter";

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