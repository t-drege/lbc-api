import {Controller, Delete, Inject, Injectable, Req, Res} from "@nestjs/common";
import {DeleteUser} from "@app/domain/backoffice/usecase/user/delete.user";
import {DeleteUserPresenterImpl} from "@app/domain/backoffice/presenter/user/delete.user.presenter.impl";
import {DeleteUserRequest} from "@app/domain/backoffice/request/user/delete.user.request";

@Controller('/users/:id')
export class DeleteUserController {
    private readonly useCase: DeleteUser
    private readonly presenter: DeleteUserPresenterImpl

    constructor(useCase: DeleteUser, @Inject('DeleteUserPresenterImpl')presenter: DeleteUserPresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Delete()
    public async deleteUserAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.useCase.execute(new DeleteUserRequest(req.params.id)))
        res.status(vm.statusCode).send(vm.numberUserDeleted)
    }
}