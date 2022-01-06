import {Inject, Injectable} from "@nestjs/common";
import {DeleteUserGateway} from "@app/domain/backoffice/gateway/user/delete.user.gateway";
import {DeleteUserRequest} from "@app/domain/backoffice/request/user/delete.user.request";
import {DeleteUserResponse} from "@app/domain/backoffice/response/user/delete.user.response";

@Injectable()
export class DeleteUser {
    private readonly gateway:DeleteUserGateway

    constructor(@Inject('DeleteUserGateway')gateway:DeleteUserGateway) {
        this.gateway = gateway
    }

    public async execute(request:DeleteUserRequest) {
        const number = await this.gateway.deleteUser(request.userId)
        return new DeleteUserResponse(number)
    }
}
