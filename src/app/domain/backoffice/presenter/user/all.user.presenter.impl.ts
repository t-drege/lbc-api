import {AllUserResponse} from "@app/domain/backoffice/response/user/all.user.response";
import {AllUserViewModel} from "@app/presentation/viewmodel/backoffice/user/all.user.viewmodel";

export interface AllUserPresenterImpl {
    present(response: AllUserResponse): AllUserViewModel
}