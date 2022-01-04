export class ReadAllProductRequest {
    private readonly _page: number
    private readonly _limit: number
    private readonly _activated: number
    private readonly _description: string
    private readonly _newspaperId:number

    constructor(page: number, limit: number, activated: number, description: string, newspaperId:number) {
        this._page = page
        this._limit = limit
        this._activated = activated
        this._description = description
        this._newspaperId = newspaperId
    }

    get page(): number {
        return this._page;
    }

    get limit(): number {
        return this._limit;
    }

    get activated(): number {
        return this._activated;
    }

    get description(): string {
        return this._description;
    }

    get newspaperId(): number {
        return this._newspaperId;
    }

}