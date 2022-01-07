import {RemoveMediaGateway} from "@app/domain/backoffice/gateway/media/remove.media.gateway";
import Media from "@app/infrastructure/model/media";
import {Injectable} from "@nestjs/common";

@Injectable()
export class RemoveMediaRepository implements RemoveMediaGateway{
    deleteMedia(mediaId: number): Promise<number> {
        return Media.destroy({
            where: {
                id: mediaId
            }
        });
    }

    findMediaById(mediaId: number): Promise<Media> {
        return Media.findByPk(mediaId)
    }

}