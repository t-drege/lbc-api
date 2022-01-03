export class UpdateProposalRequest {
    private readonly _proposalId: number
    private readonly _title: string
    private readonly _description: string
    private readonly _newspaperNumber: number
    private readonly _proposalStatusId: number
    private readonly _categoryId: number

    constructor(proposalId: number, title: string, description: string, newspaperNumber: number, proposalStatusId: number, categoryId: number) {
        this._proposalId = proposalId
        this._title = title
        this._description = description
        this._newspaperNumber = newspaperNumber
        this._proposalStatusId = proposalStatusId
        this._categoryId = categoryId
    }

    get proposalId(): number {
        return this._proposalId;
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

    get proposalStatusId(): number {
        return this._proposalStatusId;
    }

    get categoryId(): number {
        return this._categoryId;
    }

}