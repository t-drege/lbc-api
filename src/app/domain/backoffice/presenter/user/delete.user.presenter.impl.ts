import {DeleteUserResponse} from "@app/domain/backoffice/response/user/delete.user.response";
import {DeleteUserViewModel} from "@app/presentation/viewmodel/backoffice/user/delete.user.viewmodel";

export interface DeleteUserPresenterImpl {
    present(response:DeleteUserResponse): DeleteUserViewModel
}