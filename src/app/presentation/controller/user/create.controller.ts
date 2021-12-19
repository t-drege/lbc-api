import {Controller, Inject, Post, Req, Res} from "@nestjs/common";
import CreateUsecase from "@app/domain/backoffice/usecase/user/create.usecase";
import ICreatePresenter from "@app/domain/backoffice/presenter/user/i.create.presenter";
import CreatePresenter from "@app/presentation/presenter/user/create.presenter";
import CreateRequest from "@app/domain/backoffice/request/user/create.request";


@Controller('/users')
export class CreateController {

    private readonly usecase: CreateUsecase
    private readonly presenter: CreatePresenter

    constructor(usecase: CreateUsecase, @Inject('ICreatePresenter')presenter: ICreatePresenter) {
        this.usecase = usecase
        this.presenter = presenter
    }

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
        }).catch(function (error) {
            console.log(error)
        })

    }
}