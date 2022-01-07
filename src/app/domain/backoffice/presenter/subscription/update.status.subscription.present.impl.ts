import {UpdateStatusSubscriptionResponse} from "@app/domain/backoffice/response/subscription/update.status.subscription.response";
import {UpdateSubscriptionStatusViewModel} from "@app/presentation/viewmodel/backoffice/subscription/update.subscription.status.viewmodel";

export interface UpdateStatusSubscriptionPresentImpl {
    present(response: UpdateStatusSubscriptionResponse): UpdateSubscriptionStatusViewModel
}