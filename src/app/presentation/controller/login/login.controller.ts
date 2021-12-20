import {Controller, Inject, Post, Req, Res, UseGuards} from "@nestjs/common";
import {LocalAuthGuard} from "@config/auth/auth.guard";
import {LoginPresenterImpl} from "@app/domain/backoffice/presenter/login/login.presenter.impl";
import {AuthService} from "@config/auth/auth.service";

@Controller('/login')
export class LoginController {

    //private useCase: AuthUseCase
    private presenter: LoginPresenterImpl
    private authService: AuthService

    constructor(/*useCase: AuthUseCase,*/ authService: AuthService, @Inject('IAuthPresenter') presenter: LoginPresenterImpl) {
        //this.useCase = useCase
        this.authService = authService
        this.presenter = presenter
    }

    @UseGuards(LocalAuthGuard)
    @Post()
    public loginAction(@Req() req, @Res() res) {
        this.authService.login(req.user).then(function (token) {
            res.send(token);
        })
        /*this.presenter.present(this.useCase.execute(new AuthRequest(req.body.email, req.body.password)))
            .then(function (response) {
                res.status(res.statusCode).send("res")
            })*/
    }

}