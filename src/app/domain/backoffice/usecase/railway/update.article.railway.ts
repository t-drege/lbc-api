import {Inject, Injectable} from "@nestjs/common";
import {UpdateArticleRailwayGateway} from "@app/domain/backoffice/gateway/railway/update.article.railway.gateway";
import {UpdateArticleRailwayRequest} from "@app/domain/backoffice/request/railway/update.article.railway.request";
import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";
import {UpdateArticleRailwayResponse} from "@app/domain/backoffice/response/railway/update.article.railway.response";

@Injectable()
export class UpdateArticleRailway {
    private readonly gateway: UpdateArticleRailwayGateway

    constructor(@Inject('UpdateArticleRailwayGateway') gateway: UpdateArticleRailwayGateway) {
        this.gateway = gateway
    }

    public async execute(request: UpdateArticleRailwayRequest) {

        await this.gateway.updateArticleNewspaper(
            request.articleNewspaperId,
            request.title,
            request.description,
            request.userId,
            request.categoryId,
            request.articleNewspaperStatusId)

        const article: ArticleNewspaper = await this.gateway.findArticleNewspaperById(request.articleNewspaperId)
        return new UpdateArticleRailwayResponse(article)
    }
}