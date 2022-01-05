import {Module} from "@nestjs/common";
import {UploadImageArticleController} from "@app/presentation/controller/backoffice/article/upload.image.article.controller";

@Module({
    controllers: [UploadImageArticleController],
})
export class UploadImageArticleModule {}