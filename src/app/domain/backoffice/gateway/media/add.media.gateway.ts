import Media from "@app/infrastructure/model/media";

export interface AddMediaGateway {
    createImage(filename:string, mimeType:string): Promise<Media>
}