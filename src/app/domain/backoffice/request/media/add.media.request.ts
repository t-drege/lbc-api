export class AddMediaRequest {
    private readonly _media: Express.Multer.File

    constructor(media:Express.Multer.File) {
        this._media = media
    }

    get media(): Express.Multer.File {
        return this._media;
    }
    
}