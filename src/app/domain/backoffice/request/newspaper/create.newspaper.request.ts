export class CreateNewspaperRequest {

    private readonly _number: number
    private readonly _principalTheme: string
    private readonly _folderUpload: string
    private readonly _userId: number
    private readonly _newspaperStatusId: number
    private readonly _file: Express.Multer.File

    constructor(number: number, principalTheme: string, folderUpload: string, userId: number, newspaperStatusId: number, file: Express.Multer.File) {
        this._number = number
        this._principalTheme = principalTheme
        this._folderUpload = folderUpload
        this._userId = userId
        this._newspaperStatusId = newspaperStatusId
        this._file = file
    }

    get number(): number {
        return this._number;
    }

    get principalTheme(): string {
        return this._principalTheme;
    }

    get folderUpload(): string {
        return this._folderUpload;
    }

    get userId(): number {
        return this._userId;
    }

    get newspaperStatusId(): number {
        return this._newspaperStatusId;
    }

    get file(): Express.Multer.File {
        return this._file;
    }

}