import Media from "@app/infrastructure/model/media";

export interface UploadImageBodyArticleGateway {
    uploadImage(name: string, mimeType: string): Promise<Media>
}