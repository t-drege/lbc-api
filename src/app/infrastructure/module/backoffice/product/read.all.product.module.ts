import {Module} from "@nestjs/common";
import {ReadAllProductController} from "@app/presentation/controller/backoffice/product/read.all.product.controller";
import {ReadAllProduct} from "@app/domain/backoffice/usecase/product/read.all.product";
import {ReadAllProductPresenter} from "@app/presentation/presenter/backoffice/product/read.all.product.presenter";
import {ReadAllProductRepository} from "@app/infrastructure/repository/backoffice/product/read.all.product.repository";

@Module({
    controllers: [ReadAllProductController],
    providers: [
        ReadAllProduct,
        {
            provide: 'ReadAllProductPresenterImpl',
            useClass: ReadAllProductPresenter
        }
        , {
            provide: 'ReadAllProductGateway',
            useClass: ReadAllProductRepository
        },
    ]
})
export class ReadAllProductModule {}