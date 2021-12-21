import {Controller, Inject, Put, Req, Res, UseGuards} from "@nestjs/common";
import {ListNewspapers} from "@app/domain/backoffice/usecase/newspaper/list.newspapers";
import {ListNewspapersPresenterImpl} from "@app/domain/backoffice/presenter/newspaper/list.newspapers.presenter.impl";
import {UpdateNewspaper} from "@app/domain/backoffice/usecase/newspaper/update.newspaper";
import {UpdateNewspaperPresenterImpl} from "@app/domain/backoffice/presenter/newspaper/update.newspaper.presenter.impl";
import {JwtAuthGuard} from "@app/infrastructure/auth/jwt/jwt.guard";
import {RolesGuard} from "@app/infrastructure/auth/roles/roles.guard";
import {UpdateNewspaperRequest} from "@app/domain/backoffice/request/newspaper/update.newspaper.request";

@Controller('/newspapers/:id')
export class UpdateNewspaperController {
    private readonly usecase: UpdateNewspaper
    private readonly presenter: UpdateNewspaperPresenterImpl

    constructor(usecase: UpdateNewspaper, @Inject('UpdateNewspaperPresenterImpl') presenter: UpdateNewspaperPresenterImpl) {
        this.usecase = usecase
        this.presenter = presenter
    }

    @Put()
    @UseGuards(JwtAuthGuard, RolesGuard)
    public async updateNewspaperAction(@Req() req, @Res() res) {
        const vm = await this.presenter.present(this.usecase.execute(new UpdateNewspaperRequest(
            req.params.id,
            req.body.number,
            req.body.principalTheme,
            req.body.publishedAt,
            req.body.mediaId,
            req.body.newspaperId
        )))
        res.status(vm.statusCode).send(vm.newspaper)
    }
}