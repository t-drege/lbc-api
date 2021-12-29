export class RemoveArticleRailwayRequest {

    private readonly _articleNewspaperId: number

    constructor(articleNewspaperId: number) {
        this._articleNewspaperId = articleNewspaperId
    }

    get articleNewspaperId(): number {
        return this._articleNewspaperId;
    }

}