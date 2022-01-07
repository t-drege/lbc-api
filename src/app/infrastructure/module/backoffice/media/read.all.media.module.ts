import {Module} from "@nestjs/common";
import {ReadAllMediaController} from "@app/presentation/controller/backoffice/media/read.all.media.controller";
import {ReadAllMedia} from "@app/domain/backoffice/usecase/media/read.all.media";
import {ReadAllMediaPresenter} from "@app/presentation/presenter/backoffice/media/read.all.media.presenter";
import {ReadAllMediaRepository} from "@app/infrastructure/repository/backoffice/media/read.all.media.repository";

@Module({
    controllers: [ReadAllMediaController],
    providers: [
        ReadAllMedia,
        {
            provide: 'ReadAllMediaPresenterImpl',
            useClass: ReadAllMediaPresenter
        }
        , {
            provide: 'ReadAllMediaGateway',
            useClass: ReadAllMediaRepository
        },
    ]
})
export class ReadAllMediaModule {

}
