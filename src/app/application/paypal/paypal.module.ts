import {Module} from "@nestjs/common";
import {Paypal} from "@app/application/paypal/paypal.provider";
import {PaypalRequest} from "@app/application/paypal/paypal.request";


@Module({
    providers: [
        Paypal,
        PaypalRequest
    ],
    exports: [PaypalRequest]
})
export class PaypalModule {}