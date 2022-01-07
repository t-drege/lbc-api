export class ReadAllSubscriptionRequest {
    private readonly _page: number
    private readonly _limit: number

    constructor(page: number, limit: number) {
        this._page = page
        this._limit = limit
    }

    get page(): number {
        return this._page;
    }

    get limit(): number {
        return this._limit;
    }

}