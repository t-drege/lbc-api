import {AllArticlesRailwayGateway} from "@app/domain/backoffice/gateway/railway/all.articles.railway.gateway";
import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";
import {Injectable} from "@nestjs/common";

@Injectable()
export class AllArticlesRailwayRepository implements AllArticlesRailwayGateway {
    findAllArticleByNewspaperId(newspaperId: number): Promise<Array<ArticleNewspaper>> {
        return ArticleNewspaper.findAll({
            where: {
                newspaperId: newspaperId
            }
        })
    }
}