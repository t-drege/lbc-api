import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";

export interface AddArticleRailwayGateway {
    createArticle(article:ArticleNewspaper):Promise<ArticleNewspaper>
}