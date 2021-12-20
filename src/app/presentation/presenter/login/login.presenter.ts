import {Injectable} from "@nestjs/common";
import {LoginPresenterImpl} from "@app/domain/backoffice/presenter/login/login.presenter.impl";
import {LoginResponse} from "@app/domain/backoffice/response/login/login.response";
import {LoginViewModel} from "@app/presentation/viewmodel/login/login.viewmodel";

@Injectable()
export class LoginPresenter implements LoginPresenterImpl {
    present(response: Promise<LoginResponse>): Promise<LoginViewModel> {
        return Promise.resolve(undefined);
    }
}