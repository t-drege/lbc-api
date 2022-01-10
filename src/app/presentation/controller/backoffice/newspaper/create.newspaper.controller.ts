import {Controller, Inject, Post, Req, Res, UploadedFile, UseGuards, UseInterceptors} from "@nestjs/common";
import {JwtAuthGuard} from "@app/infrastructure/auth/jwt/jwt.guard";
import {RolesGuard} from "@app/infrastructure/auth/roles/roles.guard";
import {CreateNewspaper} from "@app/domain/backoffice/usecase/newspaper/create.newspaper";
import {CreateNewspaperPresenterImpl} from "@app/domain/backoffice/presenter/newspaper/create.newspaper.presenter.impl";
import {CreateNewspaperRequest} from "@app/domain/backoffice/request/newspaper/create.newspaper.request";
import {CreateNewspaperViewModel} from "@app/presentation/viewmodel/backoffice/newspaper/create.newspaper.viewmodel";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";

@Controller('/newspapers')
export class CreateNewspaperController {

    private readonly usecase: CreateNewspaper
    private readonly presenter: CreateNewspaperPresenterImpl

    constructor(usecase: CreateNewspaper, @Inject('CreateNewspaperPresenterImpl') presenter: CreateNewspaperPresenterImpl) {
        this.usecase = usecase
        this.presenter = presenter
    }

    @Post()
    //@UseGuards(JwtAuthGuard, RolesGuard)
    @UseInterceptors(FileInterceptor('upload', {
        storage: diskStorage({
            destination: './public/image/upload',
            filename: (req, file, cb) => {
                cb(null, file.originalname)
            }
        })
    }))
    async createAction(@Req() req, @Res() res, @UploadedFile() file: Express.Multer.File) {
        const vm: CreateNewspaperViewModel = this.presenter.present(
            await this.usecase.execute(new CreateNewspaperRequest(
                req.body.number,
                req.body.principalTheme,
                req.body.folderUpload,
                req.user.id,
                req.body.newspaperStatusId
            ))
        )
        res.status(vm.statusCode).send(vm.newspaper)
    }

}
