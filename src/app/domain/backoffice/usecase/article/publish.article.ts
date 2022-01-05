import {Inject, Injectable} from "@nestjs/common";
import {PublishArticleGateway} from "@app/domain/backoffice/gateway/article/publish.article.gateway";
import {PublishArticleRequest} from "@app/domain/backoffice/request/article/publish.article.request";
import {PublishArticleResponse} from "@app/domain/backoffice/response/article/publish.article.response";

@Injectable()
export class PublishArticle {
    private readonly gateway: PublishArticleGateway

    constructor(@Inject('PublishArticleGateway') gateway: PublishArticleGateway) {
        this.gateway = gateway
    }

    public async execute(request: PublishArticleRequest) {

        await this.gateway.updatePublishDateAndStatusArticle(request.articleId, request.publishDate, (request.isAwaitingPublication) ? 2 : 3)
        const article = await this.gateway.findArticleById(request.articleId)
        return new PublishArticleResponse(article)
    }
}