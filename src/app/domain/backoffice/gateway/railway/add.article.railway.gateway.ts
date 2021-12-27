import ArticleNewspaper from "@app/infrastructure/model/article";

export interface AddArticleRailwayGateway {
    createArticle(article:ArticleNewspaper):Promise<ArticleNewspaper>
}