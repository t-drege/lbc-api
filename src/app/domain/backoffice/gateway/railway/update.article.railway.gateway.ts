import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";

export interface UpdateArticleRailwayGateway {
    updateArticleNewspaper(articleId: number, title:string, description: string, userId: number, categoryId: number): Promise<[number, ArticleNewspaper[]]>
    findArticleNewspaperById(articleId: number): Promise<ArticleNewspaper>
}