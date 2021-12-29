import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";

export class AllArticlesRailwayResponse {

    private readonly _articlesNewspaper: Array<ArticleNewspaper>

    constructor(articlesNewspaper:Array<ArticleNewspaper> ) {
        this._articlesNewspaper = articlesNewspaper
    }

    get articlesNewspaper(): Array<ArticleNewspaper> {
        return this._articlesNewspaper;
    }

}