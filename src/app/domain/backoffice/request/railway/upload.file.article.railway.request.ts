export class UploadFileArticleRailwayRequest {
    private readonly _newspaperId: number
    private readonly _articleNewspaperId: number
    private readonly _file: Express.Multer.File

    constructor(newspaperId: number, articleNewspaperId: number, file: Express.Multer.File) {
        this._newspaperId = newspaperId
        this._articleNewspaperId = articleNewspaperId
        this._file = file
    }

    get newspaperId(): number {
        return this._newspaperId;
    }

    get articleNewspaperId(): number {
        return this._articleNewspaperId;
    }

    get file(): Express.Multer.File {
        return this._file;
    }

}