import {UpdateAbstractArticleGateway} from "@app/domain/backoffice/gateway/article/update.abstract.article.gateway";
import {Injectable} from "@nestjs/common";
import Media from "@app/infrastructure/model/media";
import Article from "@app/infrastructure/model/article";

@Injectable()
export class UpdateAbstractArticleRepository implements UpdateAbstractArticleGateway {
    addImage(filename: string, mimeType: string): Promise<Media> {
        return Media.create({
            name: filename,
            mimeType: mimeType
        }, {
            returning: true,
            raw: true
        })
    }

    findArticleById(articleId): Promise<Article> {
        return Article.findByPk(articleId)
    }

    updateArticle(articleId: number, title: string, subTitle: string, slug: string, hotNews: boolean, mediaId: number, userId: number, categoryId: number): Promise<[number, Article[]]> {
        return Article.update({
            title: title,
            subTitle: subTitle,
            slug: slug,
            hotNews: hotNews,
            mediaId: mediaId,
            userId: userId,
            categoryId: categoryId,
        }, {
            returning: true,
            where: {
                id: articleId
            }
        })
    }


}