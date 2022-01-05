import Article from "@app/infrastructure/model/article";
import Media from "@app/infrastructure/model/media";

export interface CreateArticleGateway {

    addImage(filename: string, mimeType: string): Promise<Media>

    createArticle(title: string, subTitle: string, slug: string, hotNews: boolean, mediaId: number, userId: number, categoryId: number, articleStatusId: number): Promise<Article>

    findArticleById(articleId): Promise<Article>
}