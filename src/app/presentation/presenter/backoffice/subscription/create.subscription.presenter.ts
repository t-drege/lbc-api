import {CreateSubscriptionPresenterImpl} from "@app/domain/backoffice/presenter/subscription/create.subscription.presenter.impl";
import {CreateSubscriptionResponse} from "@app/domain/backoffice/response/subscription/create.subscription.response";
import {CreateSubscriptionViewModel} from "@app/presentation/viewmodel/backoffice/subscription/create.subscription.viewmodel";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class CreateSubscriptionPresenter implements CreateSubscriptionPresenterImpl {
    present(response: CreateSubscriptionResponse): CreateSubscriptionViewModel {
        return new CreateSubscriptionViewModel(response.subscription, HttpStatus.CREATED);
    }

}