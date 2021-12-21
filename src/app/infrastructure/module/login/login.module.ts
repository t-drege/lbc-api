import {Module} from "@nestjs/common";
import {LoginRepository} from "@app/infrastructure/repository/login/login.repository";
import {LoginController} from "@app/presentation/controller/login/login.controller";
import {LoginPresenter} from "@app/presentation/presenter/login/login.presenter";
import {AuthModule} from "@app/infrastructure/auth/auth.module";
import {LoginUseCase} from "@app/domain/backoffice/usecase/login/login.usecase";


@Module({
    controllers: [LoginController],
    imports: [AuthModule],
    providers: [
        LoginUseCase,
        {
            provide: 'IAuthPresenter',
            useClass: LoginPresenter
        }
        , {
            provide: 'AuthGateway',
            useClass: LoginRepository
        },
    ]
})
export class LoginModule {

}