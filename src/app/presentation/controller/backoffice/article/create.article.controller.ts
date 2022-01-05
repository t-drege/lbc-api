import {Controller, Inject, Post, Req, Res, UploadedFile, UseGuards, UseInterceptors} from "@nestjs/common";
import {CreateArticle} from "@app/domain/backoffice/usecase/article/create.article";
import {CreateArticlePresenterImpl} from "@app/domain/backoffice/presenter/article/create.article.presenter.impl";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {CreateArticleRequest} from "@app/domain/backoffice/request/article/create.article.request";
import {JwtAuthGuard} from "@app/infrastructure/auth/jwt/jwt.guard";
import {RolesGuard} from "@app/infrastructure/auth/roles/roles.guard";

@Controller('/articles')
export class CreateArticleController {
    private readonly useCase: CreateArticle
    private readonly presenter: CreateArticlePresenterImpl

    constructor(useCase: CreateArticle, @Inject('CreateArticlePresenterImpl')presenter: CreateArticlePresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Post()
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
    public async createArticleAction(@Req() req, @Res() res, @UploadedFile() file: Express.Multer.File) {

        const vm = this.presenter.present(await this.useCase.execute(new CreateArticleRequest(
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