import {Controller, Get, Inject, Req, Res} from "@nestjs/common";
import {NewspaperStatus} from "@app/domain/backoffice/usecase/newspaper.status/newspaper.status";
import {NewspaperStatusPresenterImpl} from "@app/domain/backoffice/presenter/newspaper.status/newspaper.status.presenter.impl";
import {NewspaperStatusRequest} from "@app/domain/backoffice/request/newspaper.status/newspaper.status.request";

@Controller('/newspapers-status')
export class NewspaperStatusController {
    private readonly useCase: NewspaperStatus
    private readonly presenter: NewspaperStatusPresenterImpl

    constructor(useCase: NewspaperStatus, @Inject('NewspaperStatusPresenterImpl') presenter: NewspaperStatusPresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Get()
    public async listNewspaperStatusAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.useCase.execute(new NewspaperStatusRequest()))
        res.status(vm.statusCode).send(vm.newspaperStatus)
    }
}