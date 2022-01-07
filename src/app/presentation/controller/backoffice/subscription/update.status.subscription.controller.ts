import {Controller, Inject, Patch, Put, Req, Res} from "@nestjs/common";
import {UpdateStatusSubscription} from "@app/domain/backoffice/usecase/subscription/update.status.subscription";
import {UpdateStatusSubscriptionPresentImpl} from "@app/domain/backoffice/presenter/subscription/update.status.subscription.present.impl";
import {UpdateStatusSubscriptionRequest} from "@app/domain/backoffice/request/subscription/update.status.subscription.request";

@Controller('/subscriptions/:id/status')
export class UpdateStatusSubscriptionController {
    private readonly useCase: UpdateStatusSubscription
    private readonly presenter: UpdateStatusSubscriptionPresentImpl

    constructor(useCase: UpdateStatusSubscription, @Inject('UpdateStatusSubscriptionPresentImpl')presenter: UpdateStatusSubscriptionPresentImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Patch()
    public async updateStatusSubscriptionAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.useCase.execute(new UpdateStatusSubscriptionRequest(req.params.id, req.body.subscriptionStatusId)))

        res.status(vm.statusCode).send(vm.subscription)
    }
}