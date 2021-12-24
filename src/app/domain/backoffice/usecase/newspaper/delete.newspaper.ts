import {Inject, Injectable} from "@nestjs/common";
import {DeleteNewspaperGateway} from "@app/domain/backoffice/gateway/newspaper/delete.newspaper.gateway";
import {DeleteNewspaperRequest} from "@app/domain/backoffice/request/newspaper/delete.newspaper.request";
import {DeleteNewspaperResponse} from "@app/domain/backoffice/response/newspaper/delete.newspaper.response";

@Injectable()
export class DeleteNewspaper {
    private gateway: DeleteNewspaperGateway

    constructor(@Inject('DeleteNewspaperGateway') gateway: DeleteNewspaperGateway) {
        this.gateway = gateway
    }

    public async execute(request: DeleteNewspaperRequest) {
        return new DeleteNewspaperResponse(await this.gateway.deleteNewspaper(request.newspaperId))
    }
}