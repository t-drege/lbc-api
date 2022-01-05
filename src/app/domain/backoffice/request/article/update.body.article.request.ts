export class UpdateBodyArticleRequest {
    private readonly _articleId:number
    private readonly _bodyHtml:string

    constructor(articleId:number, bodyHtml:string) {
        this._articleId = articleId
        this._bodyHtml = bodyHtml
    }

    get articleId(): number {
        return this._articleId;
    }

    get bodyHtml(): string {
        return this._bodyHtml;
    }
}