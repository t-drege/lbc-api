import {DeleteUserPresenterImpl} from "@app/domain/backoffice/presenter/user/delete.user.presenter.impl";
import {DeleteUserResponse} from "@app/domain/backoffice/response/user/delete.user.response";
import {DeleteUserViewModel} from "@app/presentation/viewmodel/backoffice/user/delete.user.viewmodel";
import {HttpStatus} from "@nestjs/common";

export class DeleteUserPresenter implements DeleteUserPresenterImpl {
    present(response: DeleteUserResponse): DeleteUserViewModel {
        return new DeleteUserViewModel(response.numberUserDeleted.toString(), HttpStatus.NO_CONTENT)
    }

}