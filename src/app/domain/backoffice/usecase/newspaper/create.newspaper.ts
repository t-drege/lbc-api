import {Inject, Injectable} from "@nestjs/common";
import {CreateNewspaperGateway} from "@app/domain/backoffice/gateway/newspaper/create.newspaper.gateway";
import {CreateNewspaperRequest} from "@app/domain/backoffice/request/newspaper/create.newspaper.request";
import Newspaper from "@app/infrastructure/model/newspaper";
import {CreateNewspaperResponse} from "@app/domain/backoffice/response/newspaper/create.newspaper.response";
import NewspaperStatus from "@app/infrastructure/model/newspaper.status";

@Injectable()
export class CreateNewspaper {
    private readonly _gateway: CreateNewspaperGateway

    constructor(@Inject('CreateNewspaperGateway')gateway: CreateNewspaperGateway) {
        this._gateway = gateway
    }

    public async execute(request: CreateNewspaperRequest) {
        let mediaId: number = null
        if (request.file != null) {
            mediaId = await this._gateway.addImageMedia(request.file.originalname, request.file.mimetype).then((media) => media.id)
        }
        const newspaper: Newspaper = await this._gateway.create(new Newspaper({
            number: request.number,
            principalTheme: request.principalTheme,
            folderUpload: request.folderUpload,
            userId: request.userId,
            newspaperStatusId: request.newspaperStatusId,
            publishedAt: (request.newspaperStatusId == NewspaperStatus.PUBLISHED) ? new Date() : null,
            mediaId: mediaId
        }))
        return new CreateNewspaperResponse(newspaper)
    }

}