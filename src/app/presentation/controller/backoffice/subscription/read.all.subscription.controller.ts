import {Controller, Get, Inject, Req, Res} from "@nestjs/common";
import {ReadAllSubscription} from "@app/domain/backoffice/usecase/subscription/read.all.subscription";
import {ReadAllSubscriptionPresenterImpl} from "@app/domain/backoffice/presenter/subscription/read.all.subscription.presenter.impl";
import {ReadAllSubscriptionRequest} from "@app/domain/backoffice/request/subscription/read.all.subscription.request";

@Controller('/subscriptions')
export class ReadAllSubscriptionController {
    private readonly useCase: ReadAllSubscription
    private readonly presenter: ReadAllSubscriptionPresenterImpl

    constructor( useCase: ReadAllSubscription, @Inject('ReadAllSubscriptionPresenterImpl') presenter: ReadAllSubscriptionPresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Get()
    public async readAllSubscriptionAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.useCase.execute(new ReadAllSubscriptionRequest(req.query.page, req.query.limit)))
        res.status(vm.statusCode).send(vm.rows)
    }
}