import {UpdateUserGateway} from "@app/domain/backoffice/gateway/user/update.user.gateway";
import {Injectable} from "@nestjs/common";
import User from "@app/infrastructure/model/user";

@Injectable()
export class UpdateUserRepository implements UpdateUserGateway {
    findUserById(userId: number): Promise<User> {
        return User.findByPk(userId)
    }

    updateUser(userId: number, firstname: string, lastname: string, username: string, email: string, password: string, phone: string, adress: string, postalCode: number, roleId: number) {
        return User.update({
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password,
            phone: phone,
            adress: adress,
            postalCode: postalCode,
            roleId: roleId,
        }, {
            where: {
                id: userId
            },
            individualHooks: true,
        })
    }

}