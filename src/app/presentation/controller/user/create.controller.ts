import {Controller, Inject, Post, Req, Res, UseGuards} from "@nestjs/common";
import CreateUsecase from "@app/domain/backoffice/usecase/user/create.usecase";
import ICreatePresenter from "@app/domain/backoffice/presenter/user/i.create.presenter";
import CreateRequest from "@app/domain/backoffice/request/user/create.request";
import {Roles} from "@app/infrastructure/auth/roles/roles.decorator";
import {Role} from "@app/infrastructure/auth/roles/role";
import {JwtAuthGuard} from "@app/infrastructure/auth/jwt/jwt.guard";
import {RolesGuard} from "@app/infrastructure/auth/roles/roles.guard";


@Controller('/users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CreateController {

    private readonly usecase: CreateUsecase
    private readonly presenter: ICreatePresenter

    constructor(usecase: CreateUsecase, @Inject('ICreatePresenter')presenter: ICreatePresenter) {
        this.usecase = usecase
        this.presenter = presenter
    }

    @Post()
    @Roles(Role.ADMIN)
    async createAction(@Req() req, @Res() res) {
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