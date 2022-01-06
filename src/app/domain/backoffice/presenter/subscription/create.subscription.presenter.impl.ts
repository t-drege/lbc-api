import {CreateSubscriptionResponse} from "@app/domain/backoffice/response/subscription/create.subscription.response";
import {CreateSubscriptionViewModel} from "@app/presentation/viewmodel/backoffice/subscription/create.subscription.viewmodel";

export interface CreateSubscriptionPresenterImpl {
    present(response: CreateSubscriptionResponse): CreateSubscriptionViewModel
}