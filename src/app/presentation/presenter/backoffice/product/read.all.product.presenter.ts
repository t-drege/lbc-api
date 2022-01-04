import {HttpStatus, Injectable} from "@nestjs/common";
import {ReadAllProductPresenterImpl} from "@app/domain/backoffice/presenter/product/read.all.product.presenter.impl";
import {ReadAllProductViewModel} from "@app/presentation/viewmodel/backoffice/product/read.all.product.viewmodel";
import {ReadAllProductResponse} from "@app/domain/backoffice/response/product/read.all.product.response";

@Injectable()
export class ReadAllProductPresenter implements ReadAllProductPresenterImpl {
    present(response: ReadAllProductResponse): ReadAllProductViewModel {
        return new ReadAllProductViewModel(response.rows, HttpStatus.OK);
    }

}