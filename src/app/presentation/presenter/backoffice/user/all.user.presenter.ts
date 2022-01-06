import {AllUserPresenterImpl} from "@app/domain/backoffice/presenter/user/all.user.presenter.impl";
import {AllUserResponse} from "@app/domain/backoffice/response/user/all.user.response";
import {AllUserViewModel} from "@app/presentation/viewmodel/backoffice/user/all.user.viewmodel";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class AllUserPresenter implements AllUserPresenterImpl {
    present(response: AllUserResponse): AllUserViewModel {
        return new AllUserViewModel(response.rows, HttpStatus.OK)
    }
}