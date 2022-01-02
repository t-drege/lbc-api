import {Module} from "@nestjs/common";
import {AllProposalsController} from "@app/presentation/controller/backoffice/proposal/all.proposals.controller";
import {AllProposals} from "@app/domain/backoffice/usecase/proposal/all.proposals";
import {AllProposalsPresenter} from "@app/presentation/presenter/backoffice/proposal/all.proposals.presenter";
import {AllProposalsRepository} from "@app/infrastructure/repository/backoffice/proposal/all.proposals.repository";

@Module({
    controllers: [AllProposalsController],
    providers: [
        AllProposals,
        {
            provide: 'AllProposalsPresenterImpl',
            useClass: AllProposalsPresenter
        }
        , {
            provide: 'AllProposalsGateway',
            useClass: AllProposalsRepository
        },
    ]
})
export class AllProposalsModule {

}