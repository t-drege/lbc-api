import {Controller, Inject, Post, Req, Res, UploadedFile, UseInterceptors} from "@nestjs/common";
import {AddMedia} from "@app/domain/backoffice/usecase/media/add.media";
import {AddMediaPresenterImpl} from "@app/domain/backoffice/presenter/media/add.media.presenter.impl";
import {AddMediaRequest} from "@app/domain/backoffice/request/media/add.media.request";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";

@Controller('/medias')
export class AddMediaController {
    private readonly useCase: AddMedia
    private readonly presenter: AddMediaPresenterImpl

    constructor(useCase: AddMedia, @Inject('AddMediaPresenterImpl') presenter: AddMediaPresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Post()
    @UseInterceptors(FileInterceptor('upload', {
        storage: diskStorage({
            destination: './public/upload/image',
            filename: (req, file, cb) => {
                cb(null, file.originalname)
            }
        })
    }))
    public async addMediaAction(@Req() req, @Res() res, @UploadedFile() file: Express.Multer.File) {
        const vm = this.presenter.present(await this.useCase.execute(new AddMediaRequest(file)))
        res.status(vm.statusCode).send(vm.media)
    }
}