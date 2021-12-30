import {Inject, Injectable} from "@nestjs/common";
import {UploadFileArticleRailwayGateway} from "@app/domain/backoffice/gateway/railway/upload.file.article.railway.gateway";
import {UploadFileArticleRailwayRequest} from "@app/domain/backoffice/request/railway/upload.file.article.railway.request";
import {NextCloudImpl} from "@app/application/webdav/nextcloud.impl";
import {UploadFileArticleRailwayResponse} from "@app/domain/backoffice/response/railway/upload.file.article.railway.response";
import ArticleNewspaper from "@app/infrastructure/model/article.newspaper";
import Newspaper from "@app/infrastructure/model/newspaper";
import ArticleNewspaperStatus from "@app/infrastructure/model/article.newspaper.status";

@Injectable()
export class UploadFileArticleRailway {
    private readonly gateway: UploadFileArticleRailwayGateway
    private readonly nextcloud: NextCloudImpl

    constructor(@Inject('UploadFileArticleRailwayGateway')gateway: UploadFileArticleRailwayGateway,
                @Inject('NextCloudImpl') nextcloud: NextCloudImpl) {
        this.gateway = gateway
        this.nextcloud = nextcloud
    }

    public async execute(request: UploadFileArticleRailwayRequest) {
        const newspaper: Newspaper = await this.gateway.findDirectoryUploadNewspaperById(request.newspaperId)

        const newspaperFolderUpload: string = newspaper.folderUpload

        await this.nextcloud.createFile(newspaperFolderUpload, request.file)

        await this.gateway.updateFileUrlUpload(request.articleNewspaperId, newspaperFolderUpload + '/' + request.file.originalname, ArticleNewspaperStatus.ARTICLE_SENDED)

        const articleNewspaper: ArticleNewspaper = await this.gateway.findArticleNewspaper(request.articleNewspaperId)

        return new UploadFileArticleRailwayResponse(articleNewspaper)
    }
}