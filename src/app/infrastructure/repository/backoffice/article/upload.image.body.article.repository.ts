import {UploadImageBodyArticleGateway} from "@app/domain/backoffice/gateway/article/upload.image.body.article.gateway";
import Media from "@app/infrastructure/model/media";
import {Injectable} from "@nestjs/common";

@Injectable()
export class UploadImageBodyArticleRepository implements UploadImageBodyArticleGateway {
    uploadImage(name: string, mimeType: string): Promise<Media> {
        return Media.create({
            name: name,
            mimeType: mimeType
        }, {
            returning: true,
            raw: true
        })
    }
}