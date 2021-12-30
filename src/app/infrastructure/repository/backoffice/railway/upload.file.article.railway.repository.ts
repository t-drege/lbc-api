import {UploadFileArticleRailwayGateway} from "@app/domain/backoffice/gateway/railway/upload.file.article.railway.gateway";
import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";
import {Injectable} from "@nestjs/common";
import Newspaper from "@app/infrastructure/model/newspaper";

@Injectable()
export class UploadFileArticleRailwayRepository implements UploadFileArticleRailwayGateway {

    findDirectoryUploadNewspaperById(newspaperId: number): Promise<Newspaper> {
        return Newspaper.findByPk(newspaperId, {
            attributes: ['folderUpload']
        })
    }

    findArticleNewspaper(articleNewspaperId: number): Promise<ArticleNewspaper> {
        return ArticleNewspaper.findByPk(articleNewspaperId)
    }

    updateFileUrlUpload(articleNewspaperId: number, fileUploadUrl: string, articleNewspaperStatusId: number): Promise<[number, ArticleNewspaper[]]> {
        return ArticleNewspaper.update({
            fileUploadUrl: fileUploadUrl,
            articleNewspaperStatusId: articleNewspaperStatusId
        }, {
            where: {
                id: articleNewspaperId,
            }
        })
    }

}
