import {Injectable} from "@nestjs/common";
import User from "@app/infrastructure/model/user";
import {AuthGateway} from "@app/domain/backoffice/gateway/login/auth.gateway";

@Injectable()
export class LoginRepository implements AuthGateway {
    public getUser(email: string) {
        return User.findOne({
            where: {
                email: email
            },
            raw: true
        })
    }
}