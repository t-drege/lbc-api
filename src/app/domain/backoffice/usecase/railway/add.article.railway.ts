import {Inject, Injectable} from "@nestjs/common";
import {AddArticleRailwayGateway} from "@app/domain/backoffice/gateway/railway/add.article.railway.gateway";
import {AddArticleRailwayRequest} from "@app/domain/backoffice/request/railway/add.article.railway.request";

@Injectable()
export class AddArticleRailway {
    private readonly gateway: AddArticleRailwayGateway

    constructor(@Inject('AddArticleRailwayGateway') gateway: AddArticleRailwayGateway) {
        this.gateway = gateway
    }

    public async execute(request: AddArticleRailwayRequest) {

    }

}