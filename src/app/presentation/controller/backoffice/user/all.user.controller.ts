import {Controller, Get, Inject, Req, Res} from "@nestjs/common";
import {AllUser} from "@app/domain/backoffice/usecase/user/all.user";
import {AllUserPresenterImpl} from "@app/domain/backoffice/presenter/user/all.user.presenter.impl";
import {AllUserRequest} from "@app/domain/backoffice/request/user/all.user.request";

@Controller('/users')
export class AllUserController {
    private readonly useCase: AllUser
    private readonly presenter: AllUserPresenterImpl

    constructor(useCase: AllUser, @Inject('AllUserPresenterImpl')presenter: AllUserPresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Get()
    public async alLUserAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.useCase.execute(new AllUserRequest(req.query.page, req.query.limit)))
        res.status(vm.statusCode).send(vm.rows)
    }
}