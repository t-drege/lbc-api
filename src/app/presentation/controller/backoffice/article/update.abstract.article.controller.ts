import {Controller, Inject, Put, Req, Res, UploadedFile, UseGuards, UseInterceptors} from "@nestjs/common";
import {UpdateAbstractArticle} from "@app/domain/backoffice/usecase/article/update.abstract.article";
import {UpdateAbstractArticlePresenterImpl} from "@app/domain/backoffice/presenter/article/update.abstract.article.presenter.impl";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {UpdateAbstractArticleRequest} from "@app/domain/backoffice/request/article/update.abstract.article.request";
import {JwtAuthGuard} from "@app/infrastructure/auth/jwt/jwt.guard";

@Controller('/articles/:id/abstract')
export class UpdateAbstractArticleController {
    private readonly useCase: UpdateAbstractArticle
    private readonly presenter: UpdateAbstractArticlePresenterImpl

    constructor(useCase: UpdateAbstractArticle, @Inject('UpdateAbstractArticlePresenterImpl') presenter: UpdateAbstractArticlePresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Put()
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor('upload', {
        storage: diskStorage({
            destination: './public/upload/image',
            filename: (req, file, cb) => {
                const name = file.originalname.split('.')[0];
                const fileExtName = file.originalname.split('.')[1];
                const randomName = Array(30)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                cb(null, `${randomName}.${fileExtName}`)
            }
        })
    }))
    public async updateAbstractArticle(@Req() req, @Res() res, @UploadedFile() file: Express.Multer.File) {
        const vm = this.presenter.present(await this.useCase.execute(new UpdateAbstractArticleRequest(
            req.params.id,
            req.body.title,
            req.body.subTitle,
            req.body.slug,
            req.body.hotNews,
            file,
            req.user.id,
            req.body.categoryId
        )))
        res.status(vm.statusCode).send(vm.article)
    }
}