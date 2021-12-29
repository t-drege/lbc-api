export class RemoveArticleRailwayViewModel {
    private readonly _numberArticleRemoved: number
    private readonly _statusCode: number

    constructor(numberArticleRemoved: number, statusCode: number) {
        this._numberArticleRemoved = numberArticleRemoved
        this._statusCode = statusCode
    }

    get numberArticleRemoved(): number {
        return this._numberArticleRemoved;
    }

    get statusCode(): number {
        return this._statusCode;
    }

}