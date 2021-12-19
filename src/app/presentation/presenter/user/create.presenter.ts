import CreatePresenterImpl from "@app/domain/backoffice/presenter/user/create.presenter.impl";
import CreateResponse from "@app/domain/backoffice/response/user/create.response";
import CreateViewModel from "@app/presentation/viewmodel/user/create.viewmodel";

export default class CreatePresenter implements CreatePresenterImpl{
    present(response: CreateResponse): CreateViewModel {
        return new CreateViewModel();
    }
}