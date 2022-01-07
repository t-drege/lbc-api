import {Module} from "@nestjs/common";
import {RemoveMediaController} from "@app/presentation/controller/backoffice/media/remove.media.controller";
import {RemoveMedia} from "@app/domain/backoffice/usecase/media/remove.media";
import {RemoveMediaPresenter} from "@app/presentation/presenter/backoffice/media/remove.media.presenter";
import {RemoveMediaRepository} from "@app/infrastructure/repository/backoffice/media/remove.media.repository";

@Module({
    controllers: [RemoveMediaController],
    providers: [
        RemoveMedia,
        {
            provide: 'RemoveMediaPresenterImpl',
            useClass: RemoveMediaPresenter
        }
        , {
            provide: 'RemoveMediaGateway',
            useClass: RemoveMediaRepository
        },
    ]
})
export class RemoveMediaModule {

}