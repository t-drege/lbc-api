import Newspaper from "@app/infrastructure/model/newspaper";
import Media from "@app/infrastructure/model/media";

export interface CreateNewspaperGateway {

    addImageMedia(filename: string, mimeType: string): Promise<Media>

    create(newspaper: Newspaper): Promise<Newspaper>
}