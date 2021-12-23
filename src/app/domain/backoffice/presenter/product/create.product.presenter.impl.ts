import {CreateProductResponse} from "@app/domain/backoffice/response/product/create.product.response";
import {CreateProductViewModel} from "@app/presentation/viewmodel/backoffice/product/create.product.viewmodel";

export interface CreateProductPresenterImpl {
    present(response: CreateProductResponse): CreateProductViewModel
}