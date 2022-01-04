import {Controller, Inject, Put, Req, Res} from "@nestjs/common";
import {UpdateProduct} from "@app/domain/backoffice/usecase/product/update.product";
import {UpdateProductPresenterImpl} from "@app/domain/backoffice/presenter/product/update.product.presenter.impl";
import {UpdateProductRequest} from "@app/domain/backoffice/request/product/update.product.request";
import {UpdateProductViewModel} from "@app/presentation/viewmodel/backoffice/product/update.product.viewmodel";

@Controller('/products/:id')
export class UpdateProductController {
    private readonly useCase: UpdateProduct
    private readonly presenter: UpdateProductPresenterImpl

    constructor(useCase: UpdateProduct, @Inject('UpdateProductPresenterImpl')presenter: UpdateProductPresenterImpl) {
        this.useCase = useCase
        this.presenter = presenter
    }

    @Put()
    public async updateProductAction(@Req() req, @Res() res) {
        const vm: UpdateProductViewModel = this.presenter.present(await this.useCase.execute(new UpdateProductRequest(
            req.params.id,
            req.body.description,
            req.body.price,
            req.body.quantity,
            req.body.activated,
            req.body.mediaId,
            req.body.productTypeId,
            req.body.newspaperId,
        )))

        res.status(vm.statusCode).send(vm.product)
    }
}