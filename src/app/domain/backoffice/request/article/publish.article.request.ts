export class PublishArticleRequest {
    private readonly _articleId:number
    private readonly _publishDate: Date
    private readonly _isAwaitingPublication: boolean

    constructor(articleId:number,publishDate:Date, isAwaitingPublication: boolean) {
        this._articleId = articleId
        this._publishDate = publishDate
        this._isAwaitingPublication = isAwaitingPublication
    }

    get articleId(): number {
        return this._articleId;
    }

    get publishDate(): Date {
        return this._publishDate;
    }

    get isAwaitingPublication(): boolean {
        return this._isAwaitingPublication;
    }

}