import {UpdateBodyArticleGateway} from "@app/domain/backoffice/gateway/article/update.body.article.gateway";
import Article from "@app/infrastructure/model/article";
import {Injectable} from "@nestjs/common";

@Injectable()
export class UpdateBodyArticleRepository implements UpdateBodyArticleGateway {
    findBodyByArticleId(articleId: number): Promise<Article> {
        return Article.findByPk(articleId)
    }

    updateBody(articleId: number, bodyHtml: string) {
        Article.update({
            bodyHtml: bodyHtml
        }, {
            where: {
                id: articleId
            }
        })
    }

}