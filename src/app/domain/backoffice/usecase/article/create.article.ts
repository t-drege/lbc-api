import {Inject, Injectable} from "@nestjs/common";
import {CreateArticleGateway} from "@app/domain/backoffice/gateway/article/create.article.gateway";
import {CreateArticleRequest} from "@app/domain/backoffice/request/article/create.article.request";
import {CreateArticleResponse} from "@app/domain/backoffice/response/article/create.article.response";
import Article from "@app/infrastructure/model/article";
import Media from "@app/infrastructure/model/media";

@Injectable()
export class CreateArticle {
    private readonly gateway: CreateArticleGateway

    constructor(@Inject('CreateArticleGateway') gateway: CreateArticleGateway) {
        this.gateway = gateway
    }

    public async execute(request: CreateArticleRequest) {
        const media: Media = await this.gateway.addImage(request.fileCoverArticle.filename, request.fileCoverArticle.mimetype)
        const articleCreate: Article = await this.gateway.createArticle(request.title, request.subTitle, request.slug, request.hotNews, media.id, request.userId, request.categoryId)
        const article: Article = await this.gateway.findArticleById(articleCreate.id)
        return new CreateArticleResponse(article)
    }
}