import CreateGateway from "@app/domain/backoffice/gateway/user/create.gateway";
import CreateResponse from "@app/domain/backoffice/response/user/create.response";
import {Inject, Injectable} from "@nestjs/common";
import CreateRequest from "@app/domain/backoffice/request/user/create.request";
import User from "@app/infrastructure/model/user";

@Injectable()
export default class CreateUsecase {

    private readonly gateway: CreateGateway

    constructor(@Inject('CreateGateway') gateway: CreateGateway) {
        this.gateway = gateway
    }

    public async execute(request: CreateRequest): Promise<CreateResponse> {
        return this.gateway.create(new User({
            firstname: request.firstname,
            lastname: request.lastname,
            username: request.username,
            email: request.email,
            password: request.password,
            roleId: request.roleId
        })).then(function (user) {
            return new CreateResponse(user);
        })
    }
}