import {DeleteUserGateway} from "@app/domain/backoffice/gateway/user/delete.user.gateway";
import User from "@app/infrastructure/model/user";

export class DeleteUserRepository implements DeleteUserGateway{
    deleteUser(userId: number): Promise<number> {
        return User.destroy({
            where: {
                id:userId
            }
        })
    }

}
