import Media from "@app/infrastructure/model/media";

export class AddMediaResponse {
    private readonly _media:Media

    constructor(media: Media) {
        this._media = media
    }

    get media(): Media {
        return this._media;
    }

}