import Article from "@app/infrastructure/model/article";

export class CreateArticleViewModel {
    private readonly _article: Article
    private readonly _statusCode:number

    constructor(article: Article,statusCode:number) {
        this._article = article
        this._statusCode = statusCode
    }

    get article(): Article {
        return this._article;
    }

    get statusCode(): number {
        return this._statusCode;
    }
}