import {UpdateUserPresenterImpl} from "@app/domain/backoffice/presenter/user/update.user.presenter.impl";
import {UpdateUserResponse} from "@app/domain/backoffice/response/user/update.user.response";
import {UpdateUserViewModel} from "@app/presentation/viewmodel/backoffice/user/update.user.viewmodel";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class UpdateUserPresenter implements UpdateUserPresenterImpl {
    present(response: UpdateUserResponse): UpdateUserViewModel {
        return new UpdateUserViewModel(response.user, HttpStatus.OK);
    }

}
