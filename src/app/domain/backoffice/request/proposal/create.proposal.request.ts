export class CreateProposalRequest {

    private readonly _title: string
    private readonly _description: string
    private readonly _newspaperNumber: number
    private readonly _userId: number
    private readonly _proposalStatusId: number
    private readonly _categoryId: number

    constructor(title: string, description: string, newspaperNumber: number, userId: number, proposalStatusId: number, categoryId: number) {
        this._title = title
        this._description = description
        this._newspaperNumber = newspaperNumber
        this._userId = userId
        this._proposalStatusId = proposalStatusId
        this._categoryId = categoryId
    }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get newspaperNumber(): number {
        return this._newspaperNumber;
    }

    get userId(): number {
        return this._userId;
    }

    get proposalStatusId(): number {
        return this._proposalStatusId;
    }

    get categoryId(): number {
        return this._categoryId;
    }

}