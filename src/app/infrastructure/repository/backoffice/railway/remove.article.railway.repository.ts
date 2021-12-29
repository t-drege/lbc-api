import {RemoveArticleRailwayGateway} from "@app/domain/backoffice/gateway/railway/remove.article.railway.gateway";
import {Injectable} from "@nestjs/common";
import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";

@Injectable()
export class RemoveArticleRailwayRepository implements RemoveArticleRailwayGateway{
    deleteArticleNewspaper(articleNewspaperId: number): Promise<number> {
        return ArticleNewspaper.destroy({
            where: {
                id: articleNewspaperId
            }
        })
    }
}