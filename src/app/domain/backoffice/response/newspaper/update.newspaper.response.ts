import Newspaper from "@app/infrastructure/model/newspaper";

export class UpdateNewspaperResponse
{
    private readonly _newspaper:Newspaper

    constructor(newspaper: Newspaper) {
        this._newspaper = newspaper
    }

    get newspaper(): Newspaper {
        return this._newspaper;
    }

}