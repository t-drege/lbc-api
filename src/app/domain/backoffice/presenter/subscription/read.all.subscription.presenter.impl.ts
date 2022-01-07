import {ReadAllSubscriptionResponse} from "@app/domain/backoffice/response/subscription/read.all.subscription.response";
import {ReadAllSubscriptionViewModel} from "@app/presentation/viewmodel/backoffice/subscription/read.all.subscription.viewmodel";

export interface ReadAllSubscriptionPresenterImpl {
    present(response: ReadAllSubscriptionResponse): ReadAllSubscriptionViewModel
}
