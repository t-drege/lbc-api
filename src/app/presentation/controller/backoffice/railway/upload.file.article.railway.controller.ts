import {Controller, Inject, Post, Req, Res, UploadedFile, UseInterceptors} from "@nestjs/common";
import {UploadFileArticleRailway} from "@app/domain/backoffice/usecase/railway/upload.file.article.railway";
import {UploadFileArticleRailwayPresenterImpl} from "@app/domain/backoffice/presenter/railway/upload.file.article.railway.presenter.impl";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {UploadFileArticleRailwayRequest} from "@app/domain/backoffice/request/railway/upload.file.article.railway.request";

@Controller('/newspapers/:newspaperId/articles-newspaper/:id/upload-file')
export class UploadFileArticleRailwayController {
    private readonly usecase: UploadFileArticleRailway
    private readonly presenter: UploadFileArticleRailwayPresenterImpl

    constructor(usecase: UploadFileArticleRailway,
                @Inject('UploadFileArticleRailwayPresenterImpl') presenter: UploadFileArticleRailwayPresenterImpl) {
        this.usecase = usecase
        this.presenter = presenter
    }

    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './public/tmp/upload',
            filename: (req, file, cb) => {
                cb(null, file.originalname)
            }
        })
    }))
    public async uploadFileArticleRailwayAction(@Req() req, @Res() res, @UploadedFile() file: Express.Multer.File) {
        const vm = this.presenter.present(await this.usecase.execute(new UploadFileArticleRailwayRequest(req.params.newspaperId, req.params.id, file)))
        res.status(vm.statusCode).send(vm.articleNewspaper)
    }
}