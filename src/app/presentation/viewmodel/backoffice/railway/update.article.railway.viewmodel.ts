import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";

export class UpdateArticleRailwayViewModel {
    private readonly _articleNewspaper: ArticleNewspaper
    private readonly _statusCode: number

    constructor(articleNewspaper: ArticleNewspaper, statusCode: number) {
        this._articleNewspaper = articleNewspaper
        this._statusCode = statusCode
    }

    get articleNewspaper(): ArticleNewspaper {
        return this._articleNewspaper;
    }

    get statusCode(): number {
        return this._statusCode;
    }
}