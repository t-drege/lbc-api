import {Inject, Injectable} from "@nestjs/common";
import {UpdateAbstractArticleGateway} from "@app/domain/backoffice/gateway/article/update.abstract.article.gateway";
import {UpdateAbstractArticleRequest} from "@app/domain/backoffice/request/article/update.abstract.article.request";
import {UpdateAbstractArticleResponse} from "@app/domain/backoffice/response/article/update.abstract.article.response";
import Media from "@app/infrastructure/model/media";
import Article from "@app/infrastructure/model/article";

@Injectable()
export class UpdateAbstractArticle {
    private readonly gateway: UpdateAbstractArticleGateway

    constructor(@Inject('UpdateAbstractArticleGateway')gateway: UpdateAbstractArticleGateway) {
        this.gateway = gateway
    }

    public async execute(request: UpdateAbstractArticleRequest) {
        const media: Media = await this.gateway.addImage(request.fileCoverArticle.filename, request.fileCoverArticle.mimetype)
        await this.gateway.updateArticle(request.articleId, request.title, request.subTitle, request.slug, request.hotNews, media.id, request.userId, request.categoryId)
        const article: Article = await this.gateway.findArticleById(request.articleId)
        return new UpdateAbstractArticleResponse(article)
    }
}