import {Controller, Delete, Inject, Req, Res} from "@nestjs/common";
import {RemoveMedia} from "@app/domain/backoffice/usecase/media/remove.media";
import {RemoveMediaPresenterImpl} from "@app/domain/backoffice/presenter/media/remove.media.presenter.impl";
import {RemoveMediaRequest} from "@app/domain/backoffice/request/media/remove.media.request";

@Controller('/medias/:id')
export class RemoveMediaController {
    private readonly useCase: RemoveMedia
    private readonly presenter: RemoveMediaPresenterImpl

    constructor(useCase: RemoveMedia, @Inject('RemoveMediaPresenterImpl') presenter: RemoveMediaPresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Delete()
    public async removeMediaAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.useCase.execute(new RemoveMediaRequest(req.params.id)))
        res.status(vm.statusCode).send(vm.numberElementDeleted)
    }
}