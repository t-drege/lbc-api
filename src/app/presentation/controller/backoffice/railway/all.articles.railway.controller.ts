import {Controller, Get, Inject, Req, Res} from "@nestjs/common";
import {AllArticlesRailway} from "@app/domain/backoffice/usecase/railway/all.articles.railway";
import {AllArticlesRailwayPresenterImpl} from "@app/domain/backoffice/presenter/railway/all.articles.railway.presenter.impl";
import {AllArticlesRailwayRequest} from "@app/domain/backoffice/request/railway/all.articles.railway.request";

@Controller('/newspapers/:id/railway')
export class AllArticlesRailwayController {
    private readonly usecase: AllArticlesRailway
    private readonly presenter: AllArticlesRailwayPresenterImpl

    constructor(usecase: AllArticlesRailway, @Inject('AllArticlesRailwayPresenterImpl') presenter: AllArticlesRailwayPresenterImpl) {
        this.usecase = usecase
        this.presenter = presenter
    }

    @Get()
    public async allArticleRailwayAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.usecase.execute(new AllArticlesRailwayRequest(req.params.id)))
        res.status(vm.statusCode).send(vm.articlesNewspaper)
    }

}