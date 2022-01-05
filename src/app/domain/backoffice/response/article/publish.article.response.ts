import Article from "@app/infrastructure/model/article";

export class PublishArticleResponse {
    private readonly _article: Article

    constructor(article: Article) {
        this._article = article
    }

    get article(): Article {
        return this._article;
    }
}