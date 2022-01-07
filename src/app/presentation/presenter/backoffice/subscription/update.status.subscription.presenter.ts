import {HttpStatus, Injectable} from "@nestjs/common";
import {UpdateStatusSubscriptionPresentImpl} from "@app/domain/backoffice/presenter/subscription/update.status.subscription.present.impl";
import {UpdateStatusSubscriptionResponse} from "@app/domain/backoffice/response/subscription/update.status.subscription.response";
import {UpdateSubscriptionStatusViewModel} from "@app/presentation/viewmodel/backoffice/subscription/update.subscription.status.viewmodel";

@Injectable()
export class UpdateStatusSubscriptionPresenter implements UpdateStatusSubscriptionPresentImpl {
    present(response: UpdateStatusSubscriptionResponse): UpdateSubscriptionStatusViewModel {
        return new UpdateSubscriptionStatusViewModel(response.subscription, HttpStatus.OK)
    }

}