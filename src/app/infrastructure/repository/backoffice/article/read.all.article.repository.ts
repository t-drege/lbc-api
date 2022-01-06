import {ReadAllArticleGateway} from "@app/domain/backoffice/gateway/article/read.all.article.gateway";
import {Injectable} from "@nestjs/common";
import Article from "@app/infrastructure/model/article";

@Injectable()
export class ReadAllArticleRepository implements ReadAllArticleGateway{
    findAllArticle(offset: number, limit: number, filters: object): Promise<any> {
        return Article.findAndCountAll({
            //attributes: ['id', 'number', 'principalTheme', 'folderUpload'],
            where: filters,
            limit: limit,
            offset: offset,
            order: [
                ['createdAt', 'DESC'],
            ]
        })
    }

}