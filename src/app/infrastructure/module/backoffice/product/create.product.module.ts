import {Module} from "@nestjs/common";
import {CreateProductController} from "@app/presentation/controller/backoffice/product/create.product.controller";
import {CreateProduct} from "@app/domain/backoffice/usecase/product/create.product";
import {CreateProductPresenter} from "@app/presentation/presenter/backoffice/product/create.product.presenter";
import {CreateProductRepository} from "@app/infrastructure/repository/backoffice/product/create.product.repository";
import {PaypalModule} from "@app/application/paypal/paypal.module";

@Module({
    controllers: [CreateProductController],
    imports: [PaypalModule],
    providers: [
        CreateProduct,
        {
            provide: 'CreateProductPresenterImpl',
            useClass: CreateProductPresenter
        }
        , {
            provide: 'CreateProductGateway',
            useClass: CreateProductRepository
        },
    ]
})
export class CreateProductModule {}