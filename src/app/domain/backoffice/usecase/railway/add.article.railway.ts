import {Inject, Injectable} from "@nestjs/common";
import {AddArticleRailwayGateway} from "@app/domain/backoffice/gateway/railway/add.article.railway.gateway";
import {AddArticleRailwayRequest} from "@app/domain/backoffice/request/railway/add.article.railway.request";
import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";
import {AddArticleRailwayResponse} from "@app/domain/backoffice/response/railway/add.article.railway.response";

@Injectable()
export class AddArticleRailway {
    private readonly gateway: AddArticleRailwayGateway

    constructor(@Inject('AddArticleRailwayGateway') gateway: AddArticleRailwayGateway) {
        this.gateway = gateway
    }

    public async execute(request: AddArticleRailwayRequest) {
        const articleNewspaper = new ArticleNewspaper({
            title: request.title,
            description: request.description,
            userId: request.userId,
            categoryId: request.categoryId,
            newspaperId: request.newspaperId
        })
        const article = await this.gateway.createArticle(articleNewspaper)
        return new AddArticleRailwayResponse(article)
    }

}