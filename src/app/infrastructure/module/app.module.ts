import {Module} from '@nestjs/common';
import {AppController} from '@app/presentation/controller/app.controller';
import {AppService} from '../repository/app.service';
import {CreateModule} from "./user/create.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {APP_GUARD} from "@nestjs/core";
import {RolesGuard} from "@config/auth/roles/roles.guard";
import {AuthModule} from "@config/auth/auth.module";
import {LoginModule} from "@app/infrastructure/module/login/login.module";
import {CreateNewspaperModule} from "@app/infrastructure/module/newspaper/create.newspaper.module";

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'totomax09',
            database: 'lbc',
            models: [__dirname + '/../model'],
            synchronize: true,
        }),
        CreateModule,
        LoginModule,
        CreateNewspaperModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
