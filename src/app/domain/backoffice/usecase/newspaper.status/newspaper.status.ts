import {NewspaperStatusGateway} from "@app/domain/backoffice/gateway/newspapers.status/newspaper.status.gateway";
import {Inject} from "@nestjs/common";
import {NewspaperStatusRequest} from "@app/domain/backoffice/request/newspaper.status/newspaper.status.request";
import {NewspaperStatusResponse} from "@app/domain/backoffice/response/newspaper.status/newspaper.status.response";

export class NewspaperStatus {
    private readonly gateway: NewspaperStatusGateway

    constructor(@Inject('NewspaperStatusGateway') gateway: NewspaperStatusGateway) {
        this.gateway = gateway
    }

    public async execute(request: NewspaperStatusRequest) {
        return new NewspaperStatusResponse(await this.gateway.findAllNewspaperStatus())
    }
}