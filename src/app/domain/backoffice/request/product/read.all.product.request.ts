export class ReadAllProductRequest {
    private readonly _page: number
    private readonly _limit: number
    private readonly _activated: Array<number>
    private readonly _description: string

    constructor(page: number, limit: number, activated: number, description: string = '') {
        this._page = page
        this._limit = limit
        this._activated = activated != undefined ? [activated] : [0, 1]
        this._description = description
    }

    get page(): number {
        return this._page;
    }

    get limit(): number {
        return this._limit;
    }

    get activated(): Array<number> {
        return this._activated;
    }

    get description(): string {
        return this._description;
    }

}