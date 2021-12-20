import {Controller, Inject, Post, Req, Res, UseGuards} from "@nestjs/common";
import CreateUsecase from "@app/domain/backoffice/usecase/user/create.usecase";
import ICreatePresenter from "@app/domain/backoffice/presenter/user/i.create.presenter";
import CreatePresenter from "@app/presentation/presenter/user/create.presenter";
import CreateRequest from "@app/domain/backoffice/request/user/create.request";
import {Roles} from "@config/auth/roles/roles.decorator";
import {Role} from "@config/auth/roles/role";
import {RolesGuard} from "@config/auth/roles/roles.guard";
import {JwtAuthGuard} from "@config/auth/jwt/jwt.guard";


@Controller('/users')
export class CreateController {

    private readonly usecase: CreateUsecase
    private readonly presenter: CreatePresenter

    constructor(usecase: CreateUsecase, @Inject('ICreatePresenter')presenter: ICreatePresenter) {
        this.usecase = usecase
        this.presenter = presenter
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createAction(@Req() req, @Res() res) {
        this.presenter.present(
            this.usecase.execute(
                new CreateRequest(
                    req.body.firstname,
                    req.body.lastname,
                    req.body.username,
                    req.body.email,
                    req.body.password,
                    req.body.role_id
                ))).then(function (viewmodel) {
            res.status(viewmodel.statusCode).send(viewmodel.user)
        })

    }
}