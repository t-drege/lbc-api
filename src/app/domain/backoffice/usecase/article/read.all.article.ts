import {Inject, Injectable} from "@nestjs/common";
import {ReadAllArticleGateway} from "@app/domain/backoffice/gateway/article/read.all.article.gateway";
import {ReadAllArticleRequest} from "@app/domain/backoffice/request/article/read.all.article.request";
import {pagination, pagingData} from "@app/application/utils/pagination";
import {ReadAllArticleResponse} from "@app/domain/backoffice/response/article/read.all.article.response";

@Injectable()
export class ReadAllArticle {
    private readonly gateway: ReadAllArticleGateway

    constructor(@Inject('ReadAllArticleGateway')gateway: ReadAllArticleGateway) {
        this.gateway = gateway
    }

    public async execute(request: ReadAllArticleRequest) {
        const {limit, offset} = pagination(request.page, request.limit)
        const articles = await this.gateway.findAllArticle(offset, limit, null)
        const rows = pagingData(articles, request.page, limit)
        return new ReadAllArticleResponse(rows)
    }
}