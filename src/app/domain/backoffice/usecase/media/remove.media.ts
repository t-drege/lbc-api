import {Inject, Injectable} from "@nestjs/common";
import {RemoveMediaGateway} from "@app/domain/backoffice/gateway/media/remove.media.gateway";
import {RemoveMediaRequest} from "@app/domain/backoffice/request/media/remove.media.request";
import {RemoveMediaResponse} from "@app/domain/backoffice/response/media/remove.media.response";
import {unlinkSync} from "fs";

@Injectable()
export class RemoveMedia {
    private readonly gateway: RemoveMediaGateway

    constructor(@Inject('RemoveMediaGateway')gateway: RemoveMediaGateway) {
        this.gateway = gateway
    }

    public async execute(request: RemoveMediaRequest) {
        await this.gateway.findMediaById(request.mediaId).then(function (media) {
            unlinkSync('./public/upload/image/' + media.name)
        })
        return new RemoveMediaResponse(await this.gateway.deleteMedia(request.mediaId))
    }
}