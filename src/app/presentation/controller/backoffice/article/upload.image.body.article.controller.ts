import {Controller, Inject, Post, Req, Res, UploadedFile, UseInterceptors} from "@nestjs/common";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {UploadImageBodyArticle} from "@app/domain/backoffice/usecase/article/upload.image.body.article";
import {UploadImageBodyArticlePresenterImpl} from "@app/domain/backoffice/presenter/article/upload.image.body.article.presenter.impl";
import {UploadImageBodyArticleRequest} from "@app/domain/backoffice/request/article/upload.image.body.article.request";

@Controller('/articles/upload/image')
export class UploadImageBodyArticleController {
    private readonly useCase: UploadImageBodyArticle
    private readonly presenter: UploadImageBodyArticlePresenterImpl

    constructor(useCase: UploadImageBodyArticle, @Inject('UploadImageBodyArticlePresenterImpl')presenter: UploadImageBodyArticlePresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Post()
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
    public async uploadImageArticleAction(@Req() req, @Res() res, @UploadedFile() file: Express.Multer.File) {
        const vm = this.presenter.present(await this.useCase.execute(new UploadImageBodyArticleRequest(req.protocol, req.host, req.socket.localPort, file)))
        res.status(vm.statusCode).send(vm.urlImageBodyArticle)
    }
}