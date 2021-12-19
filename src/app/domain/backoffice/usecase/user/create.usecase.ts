import CreateGateway from "@app/domain/backoffice/gateway/user/create.gateway";
import CreateResponse from "@app/domain/backoffice/response/user/create.response";
import {Inject, Injectable} from "@nestjs/common";

@Injectable()
export default class CreateUsecase {

    private readonly gateway: CreateGateway

    constructor(@Inject('CreateGateway') gateway: CreateGateway) {
        this.gateway = gateway
    }

    public async execute() {
        return await this.gateway.findAll().then(function (value) {
            return value
        })
    }
}