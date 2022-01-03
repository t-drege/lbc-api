import {Controller, Delete, Inject, Req, Res} from "@nestjs/common";
import {DeleteProposal} from "@app/domain/backoffice/usecase/proposal/delete.proposal";
import {DeleteProposalPresenterImpl} from "@app/domain/backoffice/presenter/proposal/delete.proposal.presenter.impl";
import {DeleteProposalRequest} from "@app/domain/backoffice/request/proposal/delete.proposal.request";

@Controller('/proposals/:id')
export class DeleteProposalController {
    private readonly useCase: DeleteProposal
    private readonly presenter: DeleteProposalPresenterImpl

    constructor(useCase: DeleteProposal, @Inject('DeleteProposalPresenterImpl') presenter: DeleteProposalPresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Delete()
    public async deleteProposalAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.useCase.execute(new DeleteProposalRequest(req.params.id)))
        res.status(vm.statusCode).send(vm.numberProposalDeleted)
    }
}
