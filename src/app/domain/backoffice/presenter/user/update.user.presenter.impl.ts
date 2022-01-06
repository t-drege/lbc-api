import {UpdateUserResponse} from "@app/domain/backoffice/response/user/update.user.response";
import {UpdateUserViewModel} from "@app/presentation/viewmodel/backoffice/user/update.user.viewmodel";

export interface UpdateUserPresenterImpl {
    present(response: UpdateUserResponse): UpdateUserViewModel
}
