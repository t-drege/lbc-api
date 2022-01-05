import Media from "@app/infrastructure/model/media";
import Article from "@app/infrastructure/model/article";

export interface UpdateAbstractArticleGateway {
    addImage(filename: string, mimeType: string): Promise<Media>

    updateArticle(articleId: number, title: string, subTitle: string, slug: string, hotNews: boolean, mediaId: number, userId: number, categoryId: number): Promise<[number, Article[]]>

    findArticleById(articleId): Promise<Article>
}