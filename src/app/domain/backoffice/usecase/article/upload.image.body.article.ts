import {Inject, Injectable} from "@nestjs/common";
import {UploadImageBodyArticleGateway} from "@app/domain/backoffice/gateway/article/upload.image.body.article.gateway";
import {UploadImageBodyArticleRequest} from "@app/domain/backoffice/request/article/upload.image.body.article.request";
import {UploadImageBodyArticleResponse} from "@app/domain/backoffice/response/article/upload.image.body.article.response";

@Injectable()
export class UploadImageBodyArticle {
    private readonly gateway: UploadImageBodyArticleGateway

    constructor(@Inject('UploadImageBodyArticleGateway')gateway: UploadImageBodyArticleGateway) {
        this.gateway = gateway
    }

    public async execute(request: UploadImageBodyArticleRequest) {
        let baseUrl = null
        await this.gateway.uploadImage(request.file.filename, request.file.mimetype)
        if (process.env.NODE_ENV == 'production') {
            baseUrl = `${request.protocol}://${request.host}`
        } else {
            baseUrl = `${request.protocol}://${request.host}:${request.port}`
        }
        const urlImageBodyArticle = `${baseUrl}/images/${request.file.filename}`
        return new UploadImageBodyArticleResponse(urlImageBodyArticle)
    }
}