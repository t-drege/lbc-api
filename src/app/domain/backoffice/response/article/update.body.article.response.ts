export class UpdateBodyArticleResponse {
    private readonly _bodyHtml: string

    constructor(bodyHtml:string) {
        this._bodyHtml = bodyHtml
    }

    get bodyHtml(): string {
        return this._bodyHtml;
    }
}