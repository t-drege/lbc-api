import {Module} from '@nestjs/common';
import {AppController} from '@app/presentation/controller/app.controller';
import {AppService} from '../repository/app.service';
import {CreateModule} from "./backoffice/user/create.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {LoginModule} from "@app/infrastructure/module/backoffice/login/login.module";
import {CreateNewspaperModule} from "@app/infrastructure/module/backoffice/newspaper/create.newspaper.module";
import {ListNewspapersModule} from "@app/infrastructure/module/backoffice/newspaper/list.newspapers.module";
import {UpdateNewspaperModule} from "@app/infrastructure/module/backoffice/newspaper/update.newspaper.module";
import {ConfigModule} from "@nestjs/config";
import {CreateProductModule} from "@app/infrastructure/module/backoffice/product/create.product.module";
import {DeleteNewspaperModule} from "@app/infrastructure/module/backoffice/newspaper/delete.newspaper.module";
import {AddArticleRailwayModule} from "@app/infrastructure/module/backoffice/railway/add.article.railway.module";
import {UpdateArticleRailwayModule} from "@app/infrastructure/module/backoffice/railway/update.article.railway.module";
import {AllArticlesRailwayModule} from "@app/infrastructure/module/backoffice/railway/all.articles.railway.module";
import {RemoveArticleRailwayModule} from "@app/infrastructure/module/backoffice/railway/remove.article.railway.module";
import {UploadFileArticleRailwayModule} from "@app/infrastructure/module/backoffice/railway/upload.file.article.railway.module";
import {NextCloudModule} from "@app/application/webdav/nextcloud.module";
import {CreateProposalModule} from "@app/infrastructure/module/backoffice/proposal/create.proposal.module";
import {AllProposalsModule} from "@app/infrastructure/module/backoffice/proposal/all.proposals.module";
import {UpdateProposalModule} from "@app/infrastructure/module/backoffice/proposal/update.proposal.module";
import {DeleteProposalModule} from "@app/infrastructure/module/backoffice/proposal/delete.proposal.module";
import {UpdateProductModule} from "@app/infrastructure/module/backoffice/product/update.product.module";

process.env['NODE_ENV'] = 'development';

@Module({
    imports: [ConfigModule.forRoot({envFilePath: `.${process.env.NODE_ENV}.env`,}),
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: process.env.HOST,
            port: parseInt(process.env.PORT),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            models: [__dirname + '/../model'],
            synchronize: true,
        }),
        CreateModule,
        LoginModule,
        CreateNewspaperModule,
        ListNewspapersModule,
        UpdateNewspaperModule,
        DeleteNewspaperModule,
        CreateProductModule,
        AddArticleRailwayModule,
        UpdateArticleRailwayModule,
        AllArticlesRailwayModule,
        RemoveArticleRailwayModule,
        UploadFileArticleRailwayModule,
        NextCloudModule,
        CreateProposalModule,
        AllProposalsModule,
        UpdateProposalModule,
        DeleteProposalModule,
        UpdateProductModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
