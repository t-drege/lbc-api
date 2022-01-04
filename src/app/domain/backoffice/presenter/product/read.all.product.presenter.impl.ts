import {ReadAllProductResponse} from "@app/domain/backoffice/response/product/read.all.product.response";
import {ReadAllProductViewModel} from "@app/presentation/viewmodel/backoffice/product/read.all.product.viewmodel";

export interface ReadAllProductPresenterImpl {
    present(response: ReadAllProductResponse): ReadAllProductViewModel
}