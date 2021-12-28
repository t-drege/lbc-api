import {Injectable} from "@nestjs/common";
import {UpdateArticleRailwayGateway} from "@app/domain/backoffice/gateway/railway/update.article.railway.gateway";
import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";
import ArticleNewspaperStatus from "@app/infrastructure/model/article.newspaper.status";

@Injectable()
export class UpdateArticleRailwayRepository implements UpdateArticleRailwayGateway {
    updateArticleNewspaper(articleId: number, title: string, description: string, userId: number, categoryId: number, articleNewspaperStatusId: number): Promise<[number, ArticleNewspaper[]]> {
        return ArticleNewspaper.update({
            title: title,
            description: description,
            userId: userId,
            categoryId: categoryId,
            articleNewspaperStatusId: articleNewspaperStatusId
        }, {
            where: {
                id: articleId
            },
            returning: true,
        })
    }

    findArticleNewspaperById(articleId: number): Promise<ArticleNewspaper> {
        return ArticleNewspaper.findByPk(articleId, {
            include: [{
                model: ArticleNewspaperStatus,
                attributes: ['id', 'value']
            }]
        })
    }
}