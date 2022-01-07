import Media from "@app/infrastructure/model/media";

export class AddMediaViewModel {
    private readonly _media:Media
    private readonly _statusCode:number

    constructor(media:Media, statusCode:number) {
        this._media = media
        this._statusCode = statusCode
    }

    get media(): Media {
        return this._media;
    }

    get statusCode(): number {
        return this._statusCode;
    }

}