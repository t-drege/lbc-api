import {Module} from '@nestjs/common';
import {AppController} from '@app/presentation/controller/app.controller';
import {AppService} from '../repository/app.service';
import {CreateModule} from "./user/create.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {LoginModule} from "@app/infrastructure/module/login/login.module";
import {CreateNewspaperModule} from "@app/infrastructure/module/newspaper/create.newspaper.module";
import {ListNewspapersModule} from "@app/infrastructure/module/newspaper/list.newspapers.module";
import {UpdateNewspaperModule} from "@app/infrastructure/module/newspaper/update.newspaper.module";
import {ConfigModule} from "@nestjs/config";
import {Paypal} from "@app/application/paypal/paypal.provider";
import {AuthService} from "@app/infrastructure/auth/auth.service";
import {PaypalModule} from "@app/application/paypal/paypal.module";

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
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
