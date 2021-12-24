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
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
