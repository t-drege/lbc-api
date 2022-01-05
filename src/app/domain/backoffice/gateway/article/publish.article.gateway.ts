import Article from "@app/infrastructure/model/article";

export interface PublishArticleGateway {
    updatePublishDateAndStatusArticle(articleId: number, publishDate: Date, articleStatusId: number): Promise<[number, Article[]]>

    findArticleById(articleId: number): Promise<Article>
}