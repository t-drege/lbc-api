import {Module} from "@nestjs/common";
import {AllUserController} from "@app/presentation/controller/backoffice/user/all.user.controller";
import {AllUser} from "@app/domain/backoffice/usecase/user/all.user";
import {AllUserPresenter} from "@app/presentation/presenter/backoffice/user/all.user.presenter";
import {AllUserRepository} from "@app/infrastructure/repository/backoffice/user/all.user.repository";

@Module({
    controllers: [AllUserController],
    providers: [
        AllUser,
        {
            provide: 'AllUserPresenterImpl',
            useClass: AllUserPresenter
        }
        , {
            provide: 'AllUserGateway',
            useClass: AllUserRepository
        },
    ]
})
export class AllUserModule {}