export class AllArticlesRailwayRequest {

    private readonly _newspaperId: number

    constructor(newspaperId: number) {
        this._newspaperId = newspaperId
    }

    get newspaperId(): number {
        return this._newspaperId;
    }

}