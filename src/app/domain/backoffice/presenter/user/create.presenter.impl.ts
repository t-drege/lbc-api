import CreateViewModel from "@app/presentation/viewmodel/user/create.viewmodel";
import CreateResponse from "@app/domain/backoffice/response/user/create.response";

export default interface CreatePresenterImpl {
    present(response: CreateResponse): CreateViewModel
}