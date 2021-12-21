import {Controller, Get, Inject, Req, Res, UseGuards} from "@nestjs/common";
import {ListNewspapers} from "@app/domain/backoffice/usecase/newspaper/list.newspapers";
import {ListNewspapersPresenterImpl} from "@app/domain/backoffice/presenter/newspaper/list.newspapers.presenter.impl";
import {JwtAuthGuard} from "@app/infrastructure/auth/jwt/jwt.guard";
import {RolesGuard} from "@app/infrastructure/auth/roles/roles.guard";
import {ListNewspapersRequest} from "@app/domain/backoffice/request/newspaper/list.newspapers.request";

@Controller('/newspapers')
export class ListNewspapersController {
    private readonly usecase: ListNewspapers
    private readonly presenter: ListNewspapersPresenterImpl

    constructor(usecase: ListNewspapers, @Inject('ListNewspapersPresenterImpl') presenter: ListNewspapersPresenterImpl) {
        this.usecase = usecase
        this.presenter = presenter
    }

    @Get()
    @UseGuards(JwtAuthGuard, RolesGuard)
    public async listNewspapersAction(@Req() req, @Res() res) {
        const vm = await this.presenter.present(this.usecase.execute(new ListNewspapersRequest(req.query.page, req.query.limit)))
        res.status(vm.statusCode).send(vm.rows)
    }

}