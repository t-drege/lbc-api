import {Module} from "@nestjs/common";
import {CreateSubscriptionController} from "@app/presentation/controller/backoffice/subscription/create.subscription.controller";
import {CreateSubscriptionPresenter} from "@app/presentation/presenter/backoffice/subscription/create.subscription.presenter";
import {CreateSubscription} from "@app/domain/backoffice/usecase/subscription/create.subscription";
import {CreateSubscriptionRepository} from "@app/infrastructure/repository/backoffice/subscription/create.subscription.repository";



@Module({
    controllers: [CreateSubscriptionController],
    providers: [
        CreateSubscription,
        {
            provide: 'CreateSubscriptionPresenterImpl',
            useClass: CreateSubscriptionPresenter
        }
        , {
            provide: 'CreateSubscriptionGateway',
            useClass: CreateSubscriptionRepository
        },
    ],
})
export class CreateSubscriptionModule {}