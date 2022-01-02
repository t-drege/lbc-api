import {Controller, Inject, Post, Req, Res, UseGuards} from "@nestjs/common";
import {CreateProposalPresenterImpl} from "@app/domain/backoffice/presenter/proposal/create.proposal.presenter.impl";
import {CreateProposal} from "@app/domain/backoffice/usecase/proposal/create.proposal";
import {CreateProposalRequest} from "@app/domain/backoffice/request/proposal/create.proposal.request";
import {JwtAuthGuard} from "@app/infrastructure/auth/jwt/jwt.guard";

@Controller('/proposals')
export class CreateProposalController {
    private readonly usecase: CreateProposal
    private readonly presenter: CreateProposalPresenterImpl

    constructor(usecase: CreateProposal, @Inject('CreateProposalPresenterImpl') presenter: CreateProposalPresenterImpl) {
        this.usecase = usecase
        this.presenter = presenter
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    public async createProposalAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.usecase.execute(new CreateProposalRequest(
            req.body.title,
            req.body.description,
            req.body.newspaperNumber,
            req.user.id,
            req.body.proposalStatusId,
            req.body.categoryId)))

        res.status(vm.statusCode).send(vm.proposal)
    }

}