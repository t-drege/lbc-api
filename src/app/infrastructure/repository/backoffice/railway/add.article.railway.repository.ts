import {AddArticleRailwayGateway} from "@app/domain/backoffice/gateway/railway/add.article.railway.gateway";
import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";

export class AddArticleRailwayRepository implements AddArticleRailwayGateway {
    createArticle(article: ArticleNewspaper): Promise<ArticleNewspaper> {
        return ArticleNewspaper.create(article.toJSON(), {
            returning: true,
            raw: true
        })
    }
}