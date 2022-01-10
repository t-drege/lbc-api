import {Module} from "@nestjs/common";
import {NewspaperStatusController} from "@app/presentation/controller/backoffice/newspaper.status/newspaper.status.controller";
import {NewspaperStatus} from "@app/domain/backoffice/usecase/newspaper.status/newspaper.status";
import {NewspaperStatusPresenter} from "@app/presentation/presenter/backoffice/newspaper.status/newspaper.status.presenter";
import {NewspaperStatusRepository} from "@app/infrastructure/repository/backoffice/newspaper.status/newspaper.status.repository";

let SelectedStatusNewspaperRepository;

@Module({
    controllers: [NewspaperStatusController],
    providers: [
        NewspaperStatus,
        {
            provide: 'NewspaperStatusPresenterImpl',
            useClass: NewspaperStatusPresenter
        }
        , {
            provide: 'NewspaperStatusGateway',
            useClass: NewspaperStatusRepository
        },
    ],
})
export class NewspaperStatusModule {
}