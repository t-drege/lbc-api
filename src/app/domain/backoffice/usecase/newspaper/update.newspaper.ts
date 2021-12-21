import {UpdateNewspaperGateway} from "@app/domain/backoffice/gateway/newspaper/update.newspaper.gateway";
import {Inject, Injectable} from "@nestjs/common";
import {UpdateNewspaperRequest} from "@app/domain/backoffice/request/newspaper/update.newspaper.request";
import {UpdateNewspaperResponse} from "@app/domain/backoffice/response/newspaper/update.newspaper.response";
import Newspaper from "@app/infrastructure/model/newspaper";

@Injectable()
export class UpdateNewspaper {
    private readonly gateway: UpdateNewspaperGateway

    constructor(@Inject('UpdateNewspaperGateway') gateway: UpdateNewspaperGateway) {
        this.gateway = gateway
    }

    public async execute(request: UpdateNewspaperRequest): Promise<UpdateNewspaperResponse> {
        const gateway = this.gateway

        const newspaper: Newspaper = await this.gateway.update(request.id, request.number, request.principalTheme, request.newspaperStatusId, request.publishedAt, request.mediaId)
            .then(() => gateway.findNewspaperById(request.id))

        return new UpdateNewspaperResponse(newspaper)
    }

}