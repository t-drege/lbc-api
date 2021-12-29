export class RemoveArticleRailwayResponse {
    private readonly _numberArticleRemoved: number

    constructor(numberArticleRemoved: number) {
        this._numberArticleRemoved = numberArticleRemoved
    }

    get numberArticleRemoved(): number {
        return this._numberArticleRemoved;
    }

}