import {Inject, Injectable} from "@nestjs/common";
import {RemoveArticleRailwayGateway} from "@app/domain/backoffice/gateway/railway/remove.article.railway.gateway";
import {RemoveArticleRailwayRequest} from "@app/domain/backoffice/request/railway/remove.article.railway.request";
import {RemoveArticleRailwayResponse} from "@app/domain/backoffice/response/railway/remove.article.railway.response";

@Injectable()
export class RemoveArticleRailway {
    private gateway: RemoveArticleRailwayGateway

    constructor(@Inject('RemoveArticleRailwayGateway') gateway: RemoveArticleRailwayGateway) {
        this.gateway = gateway
    }

    public async execute(request: RemoveArticleRailwayRequest) {
        return new RemoveArticleRailwayResponse(await this.gateway.deleteArticleNewspaper(request.articleNewspaperId))
    }
}