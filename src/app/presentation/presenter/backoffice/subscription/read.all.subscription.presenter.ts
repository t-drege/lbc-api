import {ReadAllSubscriptionPresenterImpl} from "@app/domain/backoffice/presenter/subscription/read.all.subscription.presenter.impl";
import {ReadAllSubscriptionResponse} from "@app/domain/backoffice/response/subscription/read.all.subscription.response";
import {ReadAllSubscriptionViewModel} from "@app/presentation/viewmodel/backoffice/subscription/read.all.subscription.viewmodel";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class ReadAllSubscriptionPresenter implements ReadAllSubscriptionPresenterImpl {
    present(response: ReadAllSubscriptionResponse): ReadAllSubscriptionViewModel {
        return new ReadAllSubscriptionViewModel(response.rows, HttpStatus.OK)
    }

}