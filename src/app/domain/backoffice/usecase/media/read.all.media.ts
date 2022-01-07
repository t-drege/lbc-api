import {Inject, Injectable} from "@nestjs/common";
import {ReadAllMediaGateway} from "@app/domain/backoffice/gateway/media/read.all.media.gateway";
import {ReadAllMediaRequest} from "@app/domain/backoffice/request/media/read.all.media.request";
import {pagination, pagingData} from "@app/application/utils/pagination";
import {ReadAllMediaResponse} from "@app/domain/backoffice/response/media/read.all.media.response";

@Injectable()
export class ReadAllMedia {
    private readonly gateway: ReadAllMediaGateway

    constructor(@Inject('ReadAllMediaGateway')gateway: ReadAllMediaGateway) {
        this.gateway = gateway
    }

    public async execute(request: ReadAllMediaRequest) {
        const {limit, offset} = pagination(request.page, request.limit)
        const medias = await this.gateway.findAllMedias(offset, limit)
        const rows = pagingData(medias, request.page, limit)
        return new ReadAllMediaResponse(rows)
    }
}