export class UploadImageBodyArticleViewModel {
    private readonly _urlImageBodyArticle: object
    private readonly _statusCode: number

    constructor(urlImageBodyArticle: object, statusCode: number) {
        this._urlImageBodyArticle = urlImageBodyArticle
        this._statusCode = statusCode
    }

    get urlImageBodyArticle(): object {
        return this._urlImageBodyArticle;
    }

    get statusCode(): number {
        return this._statusCode;
    }

}