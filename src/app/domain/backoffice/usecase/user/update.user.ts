import {Inject, Injectable} from "@nestjs/common";
import {UpdateUserGateway} from "@app/domain/backoffice/gateway/user/update.user.gateway";
import {UpdateUserRequest} from "@app/domain/backoffice/request/user/update.user.request";
import {UpdateUserResponse} from "@app/domain/backoffice/response/user/update.user.response";

@Injectable()
export class UpdateUser {
    private readonly gateway: UpdateUserGateway

    constructor(@Inject('UpdateUserGateway')gateway: UpdateUserGateway) {
        this.gateway = gateway
    }

    public async execute(request: UpdateUserRequest) {
        let user = await this.gateway.updateUser(
            request.userId,
            request.firstname,
            request.lastname,
            request.username,
            request.email,
            request.password,
            request.phone,
            request.adress,
            request.postalCode,
            request.roleId).then(() => this.gateway.findUserById(request.userId))

        return new UpdateUserResponse(user)
    }

}