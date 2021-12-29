import {Inject, Injectable} from "@nestjs/common";
import {AllArticlesRailwayGateway} from "@app/domain/backoffice/gateway/railway/all.articles.railway.gateway";
import {AllArticlesRailwayRequest} from "@app/domain/backoffice/request/railway/all.articles.railway.request";
import {AllArticlesRailwayResponse} from "@app/domain/backoffice/response/railway/all.articles.railway.response";

@Injectable()
export class AllArticlesRailway {
    private readonly gateway: AllArticlesRailwayGateway

    constructor(@Inject('AllArticlesRailwayGateway')gateway: AllArticlesRailwayGateway) {
        this.gateway = gateway
    }

    public async execute(request: AllArticlesRailwayRequest) {
        return new AllArticlesRailwayResponse(await this.gateway.findAllArticleByNewspaperId(request.newspaperId))
    }

}