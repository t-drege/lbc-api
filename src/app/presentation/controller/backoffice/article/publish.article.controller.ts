import {Controller, Inject, Put, Req, Res, UseGuards} from "@nestjs/common";
import {PublishArticle} from "@app/domain/backoffice/usecase/article/publish.article";
import {PublishArticlePresenterImpl} from "@app/domain/backoffice/presenter/article/publish.article.presenter.impl";
import {JwtAuthGuard} from "@app/infrastructure/auth/jwt/jwt.guard";
import {PublishArticleRequest} from "@app/domain/backoffice/request/article/publish.article.request";

@Controller('/articles/:id/publish')
export class PublishArticleController {
    private readonly useCase: PublishArticle
    private readonly presenter: PublishArticlePresenterImpl

    constructor(useCase: PublishArticle, @Inject('PublishArticlePresenterImpl')presenter: PublishArticlePresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Put()
    @UseGuards(JwtAuthGuard)
    public async publishArticleAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.useCase.execute(new PublishArticleRequest(req.params.id, req.body.publishDate, req.body.isAwaitingPublication)))
        res.status(vm.statusCode).send(vm.article)
    }
}