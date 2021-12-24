import CreateResponse from "@app/domain/backoffice/response/user/create.response";
import CreateViewModel from "@app/presentation/viewmodel/backoffice/user/create.viewmodel";
import {HttpCode, HttpStatus, Injectable} from "@nestjs/common";
import ICreatePresenter from "@app/domain/backoffice/presenter/user/i.create.presenter";

@Injectable()
export default class CreatePresenter implements ICreatePresenter {
    present(response: Promise<CreateResponse>): Promise<CreateViewModel> {
        return response.then(function (response) {
            return new CreateViewModel(response.user, HttpStatus.CREATED);
        })
    }
}