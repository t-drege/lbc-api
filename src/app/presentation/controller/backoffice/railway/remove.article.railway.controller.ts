import {Controller, Delete, Inject, Req, Res} from "@nestjs/common";
import {RemoveArticleRailway} from "@app/domain/backoffice/usecase/railway/remove.article.railway";
import {RemoveArticleRailwayPresenterImpl} from "@app/domain/backoffice/presenter/railway/remove.article.railway.presenter.impl";
import {RemoveArticleRailwayRequest} from "@app/domain/backoffice/request/railway/remove.article.railway.request";

@Controller('/newspapers/:newspaperId/articles-newspaper/:id')
export class RemoveArticleRailwayController {
    private readonly usecase: RemoveArticleRailway
    private readonly presenter: RemoveArticleRailwayPresenterImpl

    constructor(usecase: RemoveArticleRailway, @Inject('RemoveArticleRailwayPresenterImpl') presenter: RemoveArticleRailwayPresenterImpl) {
        this.usecase = usecase
        this.presenter = presenter
    }

    @Delete()
    public async removeArticleRailwayAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.usecase.execute(new RemoveArticleRailwayRequest(req.params.id)))
        res.status(vm.statusCode).send(vm.numberArticleRemoved.toString())
    }

}