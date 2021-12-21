export class UpdateNewspaperRequest {
    private readonly _id:number
    private readonly _number:number
    private readonly _principalTheme:string
    private readonly _publishedAt:Date
    private readonly _mediaId:number
    private readonly _newspaperStatusId:number

    constructor(id: number, number: number, principalTheme: string, publishedAt: Date, mediaId: number, newspaperStatusId: number) {
        this._id = id
        this._number = number
        this._principalTheme = principalTheme
        this._publishedAt = publishedAt
        this._mediaId = mediaId
        this._newspaperStatusId = newspaperStatusId
    }

    get id(): number {
        return this._id;
    }

    get number(): number {
        return this._number;
    }

    get principalTheme(): string {
        return this._principalTheme;
    }

    get publishedAt(): Date {
        return this._publishedAt;
    }

    get mediaId(): number {
        return this._mediaId;
    }

    get newspaperStatusId(): number {
        return this._newspaperStatusId;
    }

}