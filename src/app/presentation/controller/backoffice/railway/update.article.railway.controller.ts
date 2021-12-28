import {Controller, Inject, Injectable, Put, Req, Res} from "@nestjs/common";
import {UpdateArticleRailwayPresenterImpl} from "@app/domain/backoffice/presenter/railway/update.article.railway.presenter.impl";
import {UpdateArticleRailway} from "@app/domain/backoffice/usecase/railway/update.article.railway";
import {UpdateArticleRailwayRequest} from "@app/domain/backoffice/request/railway/update.article.railway.request";
import {UpdateArticleRailwayViewModel} from "@app/presentation/viewmodel/backoffice/railway/update.article.railway.viewmodel";

@Controller('/articles-newspaper/:id')
export class UpdateArticleRailwayController {
    private readonly usecase: UpdateArticleRailway
    private readonly presenter: UpdateArticleRailwayPresenterImpl

    constructor(usecase: UpdateArticleRailway, @Inject('UpdateArticleRailwayPresenterImpl') presenter: UpdateArticleRailwayPresenterImpl) {
        this.usecase = usecase
        this.presenter = presenter
    }

    @Put()
    public async updateArticleRailwayAction(@Req() req, @Res() res) {
        const vm: UpdateArticleRailwayViewModel = this.presenter.present(await this.usecase.execute(new UpdateArticleRailwayRequest(
            req.params.id,
            req.body.title,
            req.body.description,
            req.body.categoryId,
            req.body.userId,
            req.body.articleNewspaperStatusId)))

        res.status(vm.statusCode).send(vm.articleNewspaper)
    }
}