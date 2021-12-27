import {Controller, Inject, Post, Req, Res} from "@nestjs/common";
import {AddArticleRailwayPresenterImpl} from "@app/domain/backoffice/presenter/railway/add.article.railway.presenter.impl";
import {AddArticleRailway} from "@app/domain/backoffice/usecase/railway/add.article.railway";

@Controller('/newspapers/:id/railway')
export class AddArticleRailwayController {

    private readonly usecase: AddArticleRailway
    private readonly presenter: AddArticleRailwayPresenterImpl

    constructor(usecase: AddArticleRailway, @Inject('AddArticleRailwayPresenterImpl') presenter: AddArticleRailwayPresenterImpl) {
        this.usecase = usecase
        this.presenter = presenter
    }

    @Post()
    addArticleRailwayAction(@Req() req, @Res() res) {

    }
}