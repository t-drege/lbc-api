import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";

export interface AllArticlesRailwayGateway {
    findAllArticleByNewspaperId(newspaperId: number): Promise<Array<ArticleNewspaper>>
}