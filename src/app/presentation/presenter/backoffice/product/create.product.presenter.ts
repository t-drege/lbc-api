import {CreateProductPresenterImpl} from "@app/domain/backoffice/presenter/product/create.product.presenter.impl";
import {CreateProductViewModel} from "@app/presentation/viewmodel/backoffice/product/create.product.viewmodel";
import {CreateProductResponse} from "@app/domain/backoffice/response/product/create.product.response";
import {HttpStatus} from "@nestjs/common";

export class CreateProductPresenter implements CreateProductPresenterImpl{
    present(response: CreateProductResponse): CreateProductViewModel {
        return new CreateProductViewModel(response.product, HttpStatus.CREATED)
    }
}