import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";

export class UpdateArticleRailwayResponse {

    private readonly _articleNewspaper: ArticleNewspaper

    constructor(articleNewspaper: ArticleNewspaper) {
        this._articleNewspaper = articleNewspaper
    }

    get articleNewspaper(): ArticleNewspaper {
        return this._articleNewspaper;
    }

}