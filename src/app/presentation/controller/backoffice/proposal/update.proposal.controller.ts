import {UpdateProposal} from "@app/domain/backoffice/usecase/proposal/update.proposal";
import {UpdateProposalPresenterImpl} from "@app/domain/backoffice/presenter/proposal/update.proposal.presenter.impl";
import {Controller, Inject, Put, Req, Res} from "@nestjs/common";
import {UpdateProposalRequest} from "@app/domain/backoffice/request/proposal/update.proposal.request";

@Controller('/proposals/:id')
export class UpdateProposalController {
    private readonly useCase: UpdateProposal
    private readonly presenter: UpdateProposalPresenterImpl

    constructor(useCase: UpdateProposal, @Inject('UpdateProposalPresenterImpl') presenter: UpdateProposalPresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Put()
    public async execute(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.useCase.execute(new UpdateProposalRequest(
            req.params.id,
            req.body.title,
            req.body.description,
            req.body.newspaperNumber,
            req.body.proposalStatusId,
            req.body.categoryId)))

        res.status(vm.statusCode).send(vm.proposal)
    }
}