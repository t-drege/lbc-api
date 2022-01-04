import {Controller, Get, Inject, Req, Res} from "@nestjs/common";
import {ReadAllProduct} from "@app/domain/backoffice/usecase/product/read.all.product";
import {ReadAllProductPresenterImpl} from "@app/domain/backoffice/presenter/product/read.all.product.presenter.impl";
import {ReadAllProductRequest} from "@app/domain/backoffice/request/product/read.all.product.request";

@Controller('/products')
export class ReadAllProductController {
    private readonly useCase: ReadAllProduct
    private readonly presenter: ReadAllProductPresenterImpl

    constructor(useCase: ReadAllProduct, @Inject('ReadAllProductPresenterImpl') presenter: ReadAllProductPresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Get()
    public async readAllProductionAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.useCase.execute(new ReadAllProductRequest(req.query.page, req.query.limit)))
        res.status(vm.statusCode).send(vm.rows)
    }
}