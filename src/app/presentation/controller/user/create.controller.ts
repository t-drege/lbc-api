import {Controller, Get} from "@nestjs/common";
import CreateUsecase from "@app/domain/backoffice/usecase/user/create.usecase";
import User from "@app/infrastructure/model/user";

@Controller('/users')
export class CreateController {

    constructor(private readonly usecase: CreateUsecase) {}

    @Get()
    createAction()  {
        let ok = this.usecase.execute().then(function (ok) {
                return ok
        })
        return ok
    }
}