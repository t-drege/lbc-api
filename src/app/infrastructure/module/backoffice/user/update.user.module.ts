import {Module} from "@nestjs/common";
import {UpdateUserController} from "@app/presentation/controller/backoffice/user/update.user.controller";
import {UpdateUserPresenter} from "@app/presentation/presenter/backoffice/user/update.user.presenter";
import {UpdateUser} from "@app/domain/backoffice/usecase/user/update.user";
import {UpdateUserRepository} from "@app/infrastructure/repository/backoffice/user/update.user.repository";

@Module({
    controllers: [UpdateUserController],
    providers: [
        UpdateUser,
        {
            provide: 'UpdateUserPresenterImpl',
            useClass: UpdateUserPresenter
        }
        , {
            provide: 'UpdateUserGateway',
            useClass: UpdateUserRepository
        },
    ]
})
export class UpdateUserModule {}