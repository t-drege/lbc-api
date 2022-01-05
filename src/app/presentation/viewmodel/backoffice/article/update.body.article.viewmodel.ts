export class UpdateBodyArticleViewModel {
    private readonly _bodyHtml: string
    private readonly _statusCode: number

    constructor(bodyHtml: string, statusCode: number) {
        this._bodyHtml = bodyHtml
        this._statusCode = statusCode
    }

    get bodyHtml(): string {
        return this._bodyHtml;
    }

    get statusCode(): number {
        return this._statusCode;
    }
}