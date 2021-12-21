import {Controller, Inject, Post, Request, Response, UseGuards} from "@nestjs/common";
import {LocalAuthGuard} from "@app/infrastructure/auth/auth.guard";
import {LoginPresenterImpl} from "@app/domain/backoffice/presenter/login/login.presenter.impl";
import {LoginUseCase} from "@app/domain/backoffice/usecase/login/login.usecase";
import {LoginRequest} from "@app/domain/backoffice/request/login/login.request";

@Controller('/login')
export class LoginController {

    private useCase: LoginUseCase
    private presenter: LoginPresenterImpl

    constructor(useCase: LoginUseCase, @Inject('IAuthPresenter') presenter: LoginPresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Post()
    @UseGuards(LocalAuthGuard)
    public async loginAction(@Request() req, @Response() res) {
        const vm = await this.presenter.present(this.useCase.execute(new LoginRequest(req.user)))
        res.status(vm.statusCode).send(vm.tokens)
    }
}