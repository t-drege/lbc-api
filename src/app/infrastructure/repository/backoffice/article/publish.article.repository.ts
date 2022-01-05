import {PublishArticleGateway} from "@app/domain/backoffice/gateway/article/publish.article.gateway";
import Article from "@app/infrastructure/model/article";
import {Injectable} from "@nestjs/common";

@Injectable()
export class PublishArticleRepository implements PublishArticleGateway {
    findArticleById(articleId: number): Promise<Article> {
        return Article.findByPk(articleId)
    }

    updatePublishDateAndStatusArticle(articleId: number, publishDate: Date, articleStatusId: number): Promise<[number, Article[]]> {
        return Article.update({
            publishedAt: publishDate,
            articleStatusId: articleStatusId
        }, {
            where: {
                id: articleId
            }
        })
    }

}