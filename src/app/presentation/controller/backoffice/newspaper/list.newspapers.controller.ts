import {Controller, Get, Inject, Req, Res, UseGuards} from "@nestjs/common";
import {ListNewspapers} from "@app/domain/backoffice/usecase/newspaper/list.newspapers";
import {ListNewspapersPresenterImpl} from "@app/domain/backoffice/presenter/newspaper/list.newspapers.presenter.impl";
import {JwtAuthGuard} from "@app/infrastructure/auth/jwt/jwt.guard";
import {RolesGuard} from "@app/infrastructure/auth/roles/roles.guard";
import {ListNewspapersRequest} from "@app/domain/backoffice/request/newspaper/list.newspapers.request";
import {curly} from "node-libcurl";
import {Paypal} from "@app/application/paypal/paypal.provider";
import {PaypalRequestImpl} from "@app/application/paypal/paypal.request.impl";
import {PaypalRequest} from "@app/application/paypal/paypal.request";

@Controller('/newspapers')
export class ListNewspapersController {
    private readonly usecase: ListNewspapers
    private readonly presenter: ListNewspapersPresenterImpl
    private readonly paypalRequest: PaypalRequest

    constructor(usecase: ListNewspapers,
                @Inject('ListNewspapersPresenterImpl') presenter: ListNewspapersPresenterImpl) {
        this.usecase = usecase
        this.presenter = presenter
    }

    @Get()
    @UseGuards(JwtAuthGuard, RolesGuard)
    public async listNewspapersAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.usecase.execute(new ListNewspapersRequest(req.query.page, req.query.limit)))
        res.status(vm.statusCode).send(vm.rows)
    }

}