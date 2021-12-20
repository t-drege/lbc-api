import {Module} from "@nestjs/common";
import {LoginRepository} from "@app/infrastructure/repository/login/login.repository";
import {LoginController} from "@app/presentation/controller/login/login.controller";
import {LoginPresenter} from "@app/presentation/presenter/login/login.presenter";
import {AuthService} from "@config/auth/auth.service";
import {AuthModule} from "@config/auth/auth.module";


@Module({
    controllers: [LoginController],
    imports: [AuthModule],
    providers: [
        //AuthUseCase,
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