import {Module} from "@nestjs/common";
import {AddMedia} from "@app/domain/backoffice/usecase/media/add.media";
import {AddMediaPresenter} from "@app/presentation/presenter/backoffice/media/add.media.presenter";
import {AddMediaController} from "@app/presentation/controller/backoffice/media/add.media.controller";
import {AddMediaRepository} from "@app/infrastructure/repository/backoffice/media/add.media.repository";

@Module({
    controllers: [AddMediaController],
    providers: [
        AddMedia,
        {
            provide: 'AddMediaPresenterImpl',
            useClass: AddMediaPresenter
        }
        , {
            provide: 'AddMediaGateway',
            useClass: AddMediaRepository
        },
    ]
})
export class AddMediaModule {

}