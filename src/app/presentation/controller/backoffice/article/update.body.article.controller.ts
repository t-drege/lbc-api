import {Controller, Inject, Put, Req, Res, UseGuards} from "@nestjs/common";
import {UpdateBodyArticle} from "@app/domain/backoffice/usecase/article/update.body.article";
import {UpdateBodyArticlePresenterImpl} from "@app/domain/backoffice/presenter/article/update.body.article.presenter.impl";
import {UpdateBodyArticleRequest} from "@app/domain/backoffice/request/article/update.body.article.request";
import {JwtAuthGuard} from "@app/infrastructure/auth/jwt/jwt.guard";

@Controller('/articles/:id/body')
export class UpdateBodyArticleController {
    private readonly useCase: UpdateBodyArticle
    private readonly presenter: UpdateBodyArticlePresenterImpl

    constructor(useCase: UpdateBodyArticle, @Inject('UpdateBodyArticlePresenterImpl') presenter: UpdateBodyArticlePresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Put()
    @UseGuards(JwtAuthGuard)
    public async updateBodyArticleAction(@Req() req, @Res() res) {
        console.log(req.body)
        const vm = this.presenter.present(await this.useCase.execute(new UpdateBodyArticleRequest(req.params.id, req.body.bodyHtml)))
        res.status(vm.statusCode).send(vm.bodyHtml)
    }

}