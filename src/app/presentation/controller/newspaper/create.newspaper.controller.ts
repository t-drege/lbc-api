import {Controller, Inject, Post, Req, Res, UseGuards} from "@nestjs/common";
import {JwtAuthGuard} from "@app/infrastructure/auth/jwt/jwt.guard";
import {RolesGuard} from "@app/infrastructure/auth/roles/roles.guard";
import {CreateNewspaper} from "@app/domain/backoffice/usecase/newspaper/create.newspaper";
import {CreateNewspaperPresenterImpl} from "@app/domain/backoffice/presenter/newspaper/create.newspaper.presenter.impl";
import {CreateNewspaperRequest} from "@app/domain/backoffice/request/newspaper/create.newspaper.request";
import {CreateNewspaperViewModel} from "@app/presentation/viewmodel/newspaper/create.newspaper.viewmodel";

@Controller('/newspapers')
export class CreateNewspaperController {

    private readonly usecase: CreateNewspaper
    private readonly presenter: CreateNewspaperPresenterImpl

    constructor(usecase: CreateNewspaper, @Inject('CreateNewspaperPresenterImpl') presenter: CreateNewspaperPresenterImpl) {
        this.usecase = usecase
        this.presenter = presenter
    }

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    async createAction(@Req() req, @Res() res) {
        const vm: CreateNewspaperViewModel = this.presenter.present(
            await this.usecase.execute(new CreateNewspaperRequest(
                req.body.number,
                req.body.principal_theme,
                req.body.folder_upload,
                req.user.id,
                req.body.newspaper_status_id
            ))
        )
        res.status(vm.statusCode).send(vm.newspaper)
    }

}
