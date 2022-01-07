import {Controller, Get, Inject, Req, Res} from "@nestjs/common";
import {ReadAllMedia} from "@app/domain/backoffice/usecase/media/read.all.media";
import {ReadAllMediaPresenterImpl} from "@app/domain/backoffice/presenter/media/read.all.media.presenter.impl";
import {ReadAllMediaRequest} from "@app/domain/backoffice/request/media/read.all.media.request";

@Controller('/medias')
export class ReadAllMediaController {
    private readonly useCase: ReadAllMedia
    private readonly presenter: ReadAllMediaPresenterImpl

    constructor(useCase: ReadAllMedia, @Inject('ReadAllMediaPresenterImpl') presenter: ReadAllMediaPresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Get()
    public async readAllMediaAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.useCase.execute(new ReadAllMediaRequest(req.query.page, req.query.limit)))
        res.status(vm.statusCode).send(vm.rows)
    }
}