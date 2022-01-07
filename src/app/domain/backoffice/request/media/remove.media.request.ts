export class RemoveMediaRequest {
    private readonly _mediaId: number

    constructor(mediaId:number) {
        this._mediaId = mediaId
    }

    get mediaId(): number {
        return this._mediaId;
    }

}