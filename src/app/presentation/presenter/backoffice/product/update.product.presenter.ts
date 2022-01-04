import {UpdateProductPresenterImpl} from "@app/domain/backoffice/presenter/product/update.product.presenter.impl";
import {UpdateProductResponse} from "@app/domain/backoffice/response/product/update.product.response";
import {UpdateProductViewModel} from "@app/presentation/viewmodel/backoffice/product/update.product.viewmodel";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class UpdateProductPresenter implements UpdateProductPresenterImpl {
    present(response: UpdateProductResponse): UpdateProductViewModel {
        return new UpdateProductViewModel(response.product, HttpStatus.OK);
    }

}