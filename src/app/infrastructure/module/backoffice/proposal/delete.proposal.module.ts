import {Module} from "@nestjs/common";
import {DeleteProposalController} from "@app/presentation/controller/backoffice/proposal/delete.proposal.controller";
import {DeleteProposal} from "@app/domain/backoffice/usecase/proposal/delete.proposal";
import {DeleteProposalPresenter} from "@app/presentation/presenter/backoffice/proposal/delete.proposal.presenter";
import {DeleteProposalRepository} from "@app/infrastructure/repository/backoffice/proposal/delete.proposal.repository";

@Module({
    controllers: [DeleteProposalController],
    providers: [
        DeleteProposal,
        {
            provide: 'DeleteProposalPresenterImpl',
            useClass: DeleteProposalPresenter
        }
        , {
            provide: 'DeleteProposalGateway',
            useClass: DeleteProposalRepository
        },
    ]
})
export class DeleteProposalModule {}
