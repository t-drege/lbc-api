import {Inject, Injectable} from "@nestjs/common";
import {AddMediaGateway} from "@app/domain/backoffice/gateway/media/add.media.gateway";
import {AddMediaRequest} from "@app/domain/backoffice/request/media/add.media.request";
import {AddMediaResponse} from "@app/domain/backoffice/response/media/add.media.response";

@Injectable()
export class AddMedia {
    private gateway: AddMediaGateway

    constructor(@Inject('AddMediaGateway') gateway: AddMediaGateway) {
        this.gateway = gateway
    }

    public async execute(request: AddMediaRequest) {
        const media = await this.gateway.createImage(request.media.originalname, request.media.mimetype)
        return new AddMediaResponse(media)
    }
}