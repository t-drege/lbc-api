import {Inject, Injectable} from "@nestjs/common";
import {UpdateBodyArticleGateway} from "@app/domain/backoffice/gateway/article/update.body.article.gateway";
import {UpdateBodyArticleRequest} from "@app/domain/backoffice/request/article/update.body.article.request";
import {UpdateBodyArticleResponse} from "@app/domain/backoffice/response/article/update.body.article.response";

@Injectable()
export class UpdateBodyArticle {
    private readonly gateway: UpdateBodyArticleGateway

    constructor(@Inject('UpdateBodyArticleGateway')gateway: UpdateBodyArticleGateway) {
        this.gateway = gateway
    }

    public async execute(request: UpdateBodyArticleRequest) {
        await this.gateway.updateBody(request.articleId, request.bodyHtml)
        const article = await this.gateway.findBodyByArticleId(request.articleId)
        return new UpdateBodyArticleResponse(article.bodyHtml)
    }
}