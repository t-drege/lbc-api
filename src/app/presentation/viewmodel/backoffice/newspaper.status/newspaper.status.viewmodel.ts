import NewspaperStatus from "@app/infrastructure/model/newspaper.status";

export class NewspaperStatusViewModel {
    private readonly _newspaperStatus:Array<NewspaperStatus>
    private readonly _statusCode:number

    constructor(newspaperStatus:Array<NewspaperStatus>, statusCode:number) {
        this._newspaperStatus = newspaperStatus
        this._statusCode = statusCode
    }

    get newspaperStatus(): Array<NewspaperStatus> {
        return this._newspaperStatus;
    }

    get statusCode(): number {
        return this._statusCode;
    }

}