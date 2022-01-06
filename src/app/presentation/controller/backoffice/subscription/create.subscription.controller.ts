import {Controller, Inject, Post, Req, Res} from "@nestjs/common";
import {CreateSubscription} from "@app/domain/backoffice/usecase/subscription/create.subscription";
import {CreateSubscriptionPresenterImpl} from "@app/domain/backoffice/presenter/subscription/create.subscription.presenter.impl";
import {CreateSubscriptionRequest} from "@app/domain/backoffice/request/subscription/create.subscription.request";

@Controller('/subscriptions')
export class CreateSubscriptionController {
    private readonly useCase: CreateSubscription
    private readonly presenter: CreateSubscriptionPresenterImpl

    constructor(useCase: CreateSubscription, @Inject('CreateSubscriptionPresenterImpl') presenter: CreateSubscriptionPresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Post()
    public async createSubscriptionAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.useCase.execute(new CreateSubscriptionRequest(
            req.body.userId,
            req.body.productId,
            req.body.paymentTypeId
        )))

        res.status(vm.statusCode).send(vm.subscription)
    }
}