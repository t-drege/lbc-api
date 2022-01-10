import NewspaperStatus from "@app/infrastructure/model/newspaper.status";

export class NewspaperStatusResponse {
    private readonly _newspaperStatus:Array<NewspaperStatus>

    constructor(newspapersStatus:Array<NewspaperStatus> ) {
        this._newspaperStatus = newspapersStatus
    }

    get newspaperStatus(): Array<NewspaperStatus> {
        return this._newspaperStatus;
    }

}