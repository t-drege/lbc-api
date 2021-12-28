export class UpdateArticleRailwayRequest {

    private readonly _articleNewspaperId: number
    private readonly _title: string
    private readonly _description: string
    private readonly _categoryId: number
    private readonly _userId: number
    private readonly _articleNewspaperStatusId

    constructor(articleNewspaperId: number, title: string, description: string, categoryId: number, userId: number, articleNewspaperStatusId: number) {
        this._articleNewspaperId = articleNewspaperId
        this._title = title
        this._description = description
        this._categoryId = categoryId
        this._userId = userId
        this._articleNewspaperStatusId = articleNewspaperStatusId
    }

    get articleNewspaperId(): number {
        return this._articleNewspaperId;
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

    get articleNewspaperStatusId() {
        return this._articleNewspaperStatusId;
    }
}