import {Controller, Get, Inject, Req, Res} from "@nestjs/common";
import {AllProposalsPresenterImpl} from "@app/domain/backoffice/presenter/proposal/all.proposals.presenter.impl";
import {AllProposals} from "@app/domain/backoffice/usecase/proposal/all.proposals";
import {AllProposalsRequest} from "@app/domain/backoffice/request/proposal/all.proposals.request";

@Controller('/proposals')
export class AllProposalsController {
    private readonly usecase: AllProposals
    private readonly presenter: AllProposalsPresenterImpl

    constructor(usecase: AllProposals, @Inject('AllProposalsPresenterImpl')presenter: AllProposalsPresenterImpl) {
        this.usecase = usecase
        this.presenter = presenter
    }

    @Get()
    public async allProposalAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.usecase.execute(new AllProposalsRequest(req.query.page, req.query.limit)))
        res.status(vm.statusCode).send(vm.rows)
    }
}