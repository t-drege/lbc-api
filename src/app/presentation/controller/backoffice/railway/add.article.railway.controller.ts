import {Controller, Inject, Post, Req, Res} from "@nestjs/common";
import {AddArticleRailwayPresenterImpl} from "@app/domain/backoffice/presenter/railway/add.article.railway.presenter.impl";
import {AddArticleRailway} from "@app/domain/backoffice/usecase/railway/add.article.railway";
import {AddArticleRailwayRequest} from "@app/domain/backoffice/request/railway/add.article.railway.request";
import {AddArticleRailwayViewModel} from "@app/presentation/viewmodel/backoffice/railway/add.article.railway.viewmodel";

@Controller('/newspapers/:id/articles-newspaper')
export class AddArticleRailwayController {

    private readonly usecase: AddArticleRailway
    private readonly presenter: AddArticleRailwayPresenterImpl

    constructor(usecase: AddArticleRailway, @Inject('AddArticleRailwayPresenterImpl') presenter: AddArticleRailwayPresenterImpl) {
        this.usecase = usecase
        this.presenter = presenter
    }

    @Post()
    public async addArticleRailwayAction(@Req() req, @Res() res) {
        const vm: AddArticleRailwayViewModel = this.presenter.present(await this.usecase.execute(new AddArticleRailwayRequest(
            req.body.title,
            req.body.description,
            req.body.categoryId,
            req.body.userId,
            req.params.id)))

        res.status(vm.statusCode).send(vm.articleNewspaper)
    }

}