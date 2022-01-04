import {Module} from "@nestjs/common";
import {UpdateProductRepository} from "@app/infrastructure/repository/backoffice/product/update.product.repository";
import {UpdateProduct} from "@app/domain/backoffice/usecase/product/update.product";
import {UpdateProductPresenter} from "@app/presentation/presenter/backoffice/product/update.product.presenter";
import {PaypalModule} from "@app/application/paypal/paypal.module";
import {UpdateProductController} from "@app/presentation/controller/backoffice/product/update.product.controller";

@Module({
    controllers: [UpdateProductController],
    imports: [PaypalModule],
    providers: [
        UpdateProduct,
        {
            provide: 'UpdateProductPresenterImpl',
            useClass: UpdateProductPresenter
        }
        , {
            provide: 'UpdateProductGateway',
            useClass: UpdateProductRepository
        },
    ]
})
export class UpdateProductModule {
}
