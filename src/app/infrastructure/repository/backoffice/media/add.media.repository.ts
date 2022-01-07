import {AddMediaGateway} from "@app/domain/backoffice/gateway/media/add.media.gateway";
import Media from "@app/infrastructure/model/media";
import {Injectable} from "@nestjs/common";

@Injectable()
export  class AddMediaRepository implements AddMediaGateway{
    createImage(filename: string, mimeType: string): Promise<Media> {
        return Media.create({
            name:filename,
            mimeType:mimeType
        }, {
            returning: true,
            raw: true
        })
    }

}
