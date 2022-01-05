import {CreateArticleGateway} from "@app/domain/backoffice/gateway/article/create.article.gateway";
import Article from "@app/infrastructure/model/article";
import {Injectable} from "@nestjs/common";
import Media from "@app/infrastructure/model/media";

@Injectable()
export class CreateArticleRepository implements CreateArticleGateway {

    addImage(filename: string, mimeType: string): Promise<Media> {
        return Media.create({
            name: filename,
            mimeType: mimeType
        }, {
            returning: true,
            raw: true
        })
    }

    createArticle(title: string, subTitle: string, slug: string, hotNews: boolean, mediaId: number, userId: number, categoryId: number, articleStatusId: number): Promise<Article> {
        return  Article.create({
            title: title,
            subTitle:subTitle,
            slug: slug,
            hotNews:hotNews,
            mediaId:mediaId,
            userId:userId,
            categoryId: categoryId,
            articleStatusId:articleStatusId
        } , {
            returning: true,
            raw: true
        })
    }

    findArticleById(articleId): Promise<Article> {
        return Article.findByPk(articleId)
    }

}
