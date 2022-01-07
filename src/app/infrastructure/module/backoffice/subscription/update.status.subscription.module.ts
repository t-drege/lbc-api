import {Module} from "@nestjs/common";
import {UpdateStatusSubscriptionController} from "@app/presentation/controller/backoffice/subscription/update.status.subscription.controller";
import {UpdateStatusSubscription} from "@app/domain/backoffice/usecase/subscription/update.status.subscription";
import {UpdateStatusSubscriptionPresenter} from "@app/presentation/presenter/backoffice/subscription/update.status.subscription.presenter";
import {UpdateStatusSubscriptionRepository} from "@app/infrastructure/repository/backoffice/subscription/update.status.subscription.repository";
import {PaypalModule} from "@app/application/paypal/paypal.module";

@Module({
    controllers: [UpdateStatusSubscriptionController],
    imports: [PaypalModule],
    providers: [
        UpdateStatusSubscription,
        {
            provide: 'UpdateStatusSubscriptionPresentImpl',
            useClass: UpdateStatusSubscriptionPresenter
        }
        , {
            provide: 'UpdateStatusSubscriptionGateway',
            useClass: UpdateStatusSubscriptionRepository
        },
    ],
})
export class UpdateStatusSubscriptionModule {
}