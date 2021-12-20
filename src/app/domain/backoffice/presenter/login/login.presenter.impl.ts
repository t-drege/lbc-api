import {LoginResponse} from "@app/domain/backoffice/response/login/login.response";
import {LoginViewModel} from "@app/presentation/viewmodel/login/login.viewmodel";

export interface LoginPresenterImpl {
    present(response: Promise<LoginResponse>):Promise<LoginViewModel>
}