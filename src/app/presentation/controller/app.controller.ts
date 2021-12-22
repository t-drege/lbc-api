import {Controller, Get} from '@nestjs/common';
import {AppService} from '@app/infrastructure/repository/app.service';
import {Paypal} from "@app/application/paypal/paypal.provider";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
