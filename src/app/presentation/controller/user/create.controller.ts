import {Controller, Get} from "@nestjs/common";

@Controller('/users')
export class CreateController {
    @Get()
    createAction() : string {
        return 'super'
    }
}