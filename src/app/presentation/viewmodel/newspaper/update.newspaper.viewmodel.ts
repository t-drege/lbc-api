import Newspaper from "@app/infrastructure/model/newspaper";

export class UpdateNewspaperViewModel {
    private readonly _newspaper: Newspaper
    private readonly _statusCode: number

    constructor(newspaper: Newspaper, statusCode: number) {
        this._newspaper = newspaper
        this._statusCode = statusCode
    }

    get newspaper(): Newspaper {
        return this._newspaper;
    }

    get statusCode(): number {
        return this._statusCode;
    }

}