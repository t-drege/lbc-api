import {Module} from "@nestjs/common";
import {CreateProposalController} from "@app/presentation/controller/backoffice/proposal/create.proposal.controller";
import {CreateProposal} from "@app/domain/backoffice/usecase/proposal/create.proposal";
import {CreateProposalPresenter} from "@app/presentation/presenter/backoffice/proposal/create.proposal.presenter";
import {CreateProposalRepository} from "@app/infrastructure/repository/backoffice/proposal/create.proposal.repository";

@Module({
    controllers: [CreateProposalController],
    providers: [
        CreateProposal,
        {
            provide: 'CreateProposalPresenterImpl',
            useClass: CreateProposalPresenter
        }
        , {
            provide: 'CreateProposalGateway',
            useClass: CreateProposalRepository
        },
    ]
})
export class CreateProposalModule {}