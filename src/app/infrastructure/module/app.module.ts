import {Module} from '@nestjs/common';
import {AppController} from '../../presentation/controller/app.controller';
import {AppService} from '../repository/app.service';
import {CreateModule} from "./user/create.module";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'totomax',
            database: 'le_bien_commun',
            models: ["dist/**/*.entity{.ts,.js}"],
            synchronize: true,
        }), CreateModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
