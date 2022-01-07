import Media from "@app/infrastructure/model/media";

export interface RemoveMediaGateway {
    findMediaById(mediaId: number): Promise<Media>

    deleteMedia(mediaId: number): Promise<number>
}