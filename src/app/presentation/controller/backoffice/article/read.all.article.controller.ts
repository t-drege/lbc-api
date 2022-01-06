import {Controller, Get, Inject, Req, Res} from "@nestjs/common";
import {ReadAllArticle} from "@app/domain/backoffice/usecase/article/read.all.article";
import {ReadAllArticlePresenterImpl} from "@app/domain/backoffice/presenter/article/read.all.article.presenter.impl";
import {ReadAllArticleRequest} from "@app/domain/backoffice/request/article/read.all.article.request";

@Controller('/articles')
export class ReadAllArticleController {
    private readonly useCase: ReadAllArticle
    private readonly presenter: ReadAllArticlePresenterImpl

    constructor(useCase: ReadAllArticle, @Inject('ReadAllArticlePresenterImpl') presenter: ReadAllArticlePresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Get()
    public async readAllArticleAction(@Req() req, @Res() res) {
        const vm = await this.presenter.present(await this.useCase.execute(new ReadAllArticleRequest(req.query.page, req.query.limit)))
        res.status(vm.statusCode).send(vm.rows)
    }
}