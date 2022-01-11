import {CreateNewspaperGateway} from "@app/domain/backoffice/gateway/newspaper/create.newspaper.gateway";
import Newspaper from "@app/infrastructure/model/newspaper";
import {Injectable} from "@nestjs/common";
import Media from "@app/infrastructure/model/media";

@Injectable()
export class CreateNewspaperRepository implements CreateNewspaperGateway {
    create(newspaper: Newspaper): Promise<Newspaper> {
        return Newspaper.create(newspaper.toJSON(), {
            returning: true,
            raw: true
        })
    }

    addImageMedia(filename: string, mimeType: string): Promise<Media> {
        return Media.create({
            name: filename,
            mimeType: mimeType
        }, {
            returning: true,
            raw: true
        });
    }
}