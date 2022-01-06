import {Module} from "@nestjs/common";
import {DeleteUserController} from "@app/presentation/controller/backoffice/user/delete.user.controller";
import {DeleteUser} from "@app/domain/backoffice/usecase/user/delete.user";
import {DeleteUserPresenter} from "@app/presentation/presenter/backoffice/user/delete.user.presenter";
import {DeleteUserRepository} from "@app/infrastructure/repository/backoffice/user/delete.user.repository";

@Module({
    controllers: [DeleteUserController],
    providers: [
        DeleteUser,
        {
            provide: 'DeleteUserPresenterImpl',
            useClass: DeleteUserPresenter
        }
        , {
            provide: 'DeleteUserGateway',
            useClass: DeleteUserRepository
        },
    ]
})
export class DeleteUserModule {}
