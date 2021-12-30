import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";
import Newspaper from "@app/infrastructure/model/newspaper";

export interface UploadFileArticleRailwayGateway {
    findDirectoryUploadNewspaperById(newspaperId: number): Promise<Newspaper>

    updateFileUrlUpload(articleNewspaperId: number, fileUploadUrl: string, articleNewspaperStatusId: number): Promise<[number, ArticleNewspaper[]]>

    findArticleNewspaper(articleNewspaperId: number): Promise<ArticleNewspaper>
}