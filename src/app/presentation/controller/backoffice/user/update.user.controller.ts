import {Controller, Inject, Put, Req, Res} from "@nestjs/common";
import {UpdateUser} from "@app/domain/backoffice/usecase/user/update.user";
import {UpdateUserPresenterImpl} from "@app/domain/backoffice/presenter/user/update.user.presenter.impl";
import {UpdateUserRequest} from "@app/domain/backoffice/request/user/update.user.request";

@Controller('/users/:id')
export class UpdateUserController {
    private readonly useCase: UpdateUser
    private readonly presenter: UpdateUserPresenterImpl

    constructor(useCase: UpdateUser, @Inject('UpdateUserPresenterImpl') presenter: UpdateUserPresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Put()
    public async updateUserAction(@Req() req, @Res() res) {
        const vm = await this.presenter.present(await this.useCase.execute(new UpdateUserRequest(
            req.params.id,
            req.body.firstname,
            req.body.lastname,
            req.body.username,
            req.body.email,
            req.body.password,
            req.body.phone,
            req.body.adress,
            req.body.postalCode,
            req.body.roleId
        )))

        res.status(vm.statusCode).send(vm.user)
    }
}