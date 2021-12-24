import CreateViewModel from "@app/presentation/viewmodel/backoffice/user/create.viewmodel";
import CreateResponse from "@app/domain/backoffice/response/user/create.response";

export default interface ICreatePresenter {
    present(response: Promise<CreateResponse>): Promise<CreateViewModel>
}