import {Module} from "@nestjs/common";
import {CreateController} from "@app/presentation/controller/user/create.controller";
import CreateUsecase from "@app/domain/backoffice/usecase/user/create.usecase";
import {CreateRepository} from "@app/infrastructure/repository/user/create.repository";
import User from "@app/infrastructure/model/user";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
    controllers: [CreateController],
    providers:[
        CreateUsecase,{
        provide: 'CreateGateway',
        useClass: CreateRepository
    }]
})

export class CreateModule{}