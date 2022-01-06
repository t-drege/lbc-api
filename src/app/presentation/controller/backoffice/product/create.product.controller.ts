import {Controller, Inject, Post, Req, Res} from "@nestjs/common";
import {CreateProduct} from "@app/domain/backoffice/usecase/product/create.product";
import {CreateProductPresenterImpl} from "@app/domain/backoffice/presenter/product/create.product.presenter.impl";
import {CreateProductRequest} from "@app/domain/backoffice/request/product/create.product.request";

@Controller('/products')
export class CreateProductController {
    private readonly usecase: CreateProduct
    private readonly presenter: CreateProductPresenterImpl

    constructor(usecase: CreateProduct, @Inject('CreateProductPresenterImpl') presenter: CreateProductPresenterImpl) {
        this.usecase = usecase
        this.presenter = presenter
    }

    @Post()
    public async createProductAction(@Req() req, @Res() res) {
        const vm = this.presenter.present(await this.usecase.execute(
            new CreateProductRequest(
                req.body.description,
                req.body.price,
                req.body.quantity,
                req.body.activated,
                req.body.mediaId,
                req.body.productTypeId,
                req.body.newspaperId,
                req.body.frequency,
                req.body.isSubscription
            )))
        res.status(vm.statusCode).send(vm.product)
    }
}