import {ReadAllMediaGateway} from "@app/domain/backoffice/gateway/media/read.all.media.gateway";
import Media from "@app/infrastructure/model/media";
import {Injectable} from "@nestjs/common";

@Injectable()
export class ReadAllMediaRepository implements ReadAllMediaGateway{
    findAllMedias(offset: number, limit: number): Promise<any> {
        return Media.findAndCountAll({
            //attributes: ['id', 'number', 'principalTheme', 'folderUpload'],
            limit: limit,
            offset: offset,
            order: [
                ['createdAt', 'DESC'],
            ]
        })
    }

}