import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";

export class ReadAllSubscriptionResponse {

    private readonly _rows: any

    constructor(rows: any) {
        this._rows = rows
    }

    get rows(): any {
        return this._rows;
    }

}