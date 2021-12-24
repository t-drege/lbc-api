import {Controller, Delete, Inject, Req, Res, UseGuards} from "@nestjs/common";
import {DeleteNewspaper} from "@app/domain/backoffice/usecase/newspaper/delete.newspaper";
import {DeleteNewspaperPresenterImpl} from "@app/domain/backoffice/presenter/newspaper/delete.newspaper.presenter.impl";
import {JwtAuthGuard} from "@app/infrastructure/auth/jwt/jwt.guard";
import {RolesGuard} from "@app/infrastructure/auth/roles/roles.guard";
import {DeleteNewspaperRequest} from "@app/domain/backoffice/request/newspaper/delete.newspaper.request";

@Controller('/newspapers/:id')
export class DeleteNewspaperController {

    private readonly usecase: DeleteNewspaper
    private readonly presenter: DeleteNewspaperPresenterImpl

    constructor(usecase: DeleteNewspaper, @Inject('DeleteNewspaperPresenterImpl') presenter: DeleteNewspaperPresenterImpl) {
        this.usecase = usecase
        this.presenter = presenter
    }

    @Delete()
    @UseGuards(JwtAuthGuard, RolesGuard)
    public async deleteNewspaperAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.usecase.execute(new DeleteNewspaperRequest(req.params.id)))
        res.status(vm.statusCode).send(vm.numberObjectDeleted)
    }
}