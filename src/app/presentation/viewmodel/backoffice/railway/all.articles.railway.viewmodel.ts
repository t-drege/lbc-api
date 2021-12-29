import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";

export class AllArticlesRailwayViewModel {
    private readonly _articlesNewspaper: Array<ArticleNewspaper>
    private readonly _statusCode: number

    constructor(articlesNewspaper: Array<ArticleNewspaper>, statusCode: number) {
        this._articlesNewspaper = articlesNewspaper
        this._statusCode = statusCode
    }

    get articlesNewspaper(): Array<ArticleNewspaper> {
        return this._articlesNewspaper;
    }

    get statusCode(): number {
        return this._statusCode;
    }

}