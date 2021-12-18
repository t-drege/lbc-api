import {Module} from "@nestjs/common";
import {CreateController} from "../../../presentation/controller/user/create.controller";

@Module({
    controllers: [CreateController]
})

export class CreateModule{}