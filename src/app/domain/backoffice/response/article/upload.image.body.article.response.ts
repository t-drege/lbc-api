export class UploadImageBodyArticleResponse {
    private readonly _urlImageArticle: string

    constructor(urlImageArticle: string) {
        this._urlImageArticle = urlImageArticle
    }

    get urlImageArticle(): string {
        return this._urlImageArticle;
    }
}