export class AddArticleRailwayRequest {

    private readonly _title: string
    private readonly _description: string
    private readonly _categoryId: number
    private readonly _userId: number
    private readonly _newspaperId: number

    constructor(title:string, description:string, categoryId: number, userId:number, newspaperId:number, articleNewspaperStatusId:number) {
        this._title = title
        this._description = description
        this._categoryId = categoryId
        this._userId = userId
        this._newspaperId = newspaperId
    }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get categoryId(): number {
        return this._categoryId;
    }

    get userId(): number {
        return this._userId;
    }

    get newspaperId(): number {
        return this._newspaperId;
    }

}