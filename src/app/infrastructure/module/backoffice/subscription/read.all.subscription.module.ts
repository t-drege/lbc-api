import {Module} from "@nestjs/common";
import {ReadAllSubscriptionController} from "@app/presentation/controller/backoffice/subscription/read.all.subscription.controller";
import {ReadAllSubscription} from "@app/domain/backoffice/usecase/subscription/read.all.subscription";
import {ReadAllSubscriptionPresenter} from "@app/presentation/presenter/backoffice/subscription/read.all.subscription.presenter";
import {ReadAllSubscriptionRepository} from "@app/infrastructure/repository/backoffice/subscription/read.all.subscription.repository";

@Module({
    controllers: [ReadAllSubscriptionController],
    providers: [
        ReadAllSubscription,
        {
            provide: 'ReadAllSubscriptionPresenterImpl',
            useClass: ReadAllSubscriptionPresenter
        }
        , {
            provide: 'ReadAllSubscriptionGateway',
            useClass: ReadAllSubscriptionRepository
        },
    ],
})
export class ReadAllSubscriptionModule {}
