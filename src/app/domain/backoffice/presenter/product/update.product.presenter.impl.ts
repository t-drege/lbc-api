import {UpdateProductResponse} from "@app/domain/backoffice/response/product/update.product.response";
import {UpdateProductViewModel} from "@app/presentation/viewmodel/backoffice/product/update.product.viewmodel";

export interface UpdateProductPresenterImpl {
    present(response: UpdateProductResponse): UpdateProductViewModel
}