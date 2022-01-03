import {Module} from "@nestjs/common";
import {UpdateProposalController} from "@app/presentation/controller/backoffice/proposal/update.proposal.controller";
import {UpdateProposal} from "@app/domain/backoffice/usecase/proposal/update.proposal";
import {UpdateProposalPresenter} from "@app/presentation/presenter/backoffice/proposal/update.proposal.presenter";
import {UpdateProposalRepository} from "@app/infrastructure/repository/backoffice/proposal/update.proposal.repository";

@Module({
    controllers: [UpdateProposalController],
    providers: [
        UpdateProposal,
        {
            provide: 'UpdateProposalPresenterImpl',
            useClass: UpdateProposalPresenter
        }
        , {
            provide: 'UpdateProposalGateway',
            useClass: UpdateProposalRepository
        },
    ]
})
export class UpdateProposalModule {}