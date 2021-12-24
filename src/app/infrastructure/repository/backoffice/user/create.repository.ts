import CreateGateway from "@app/domain/backoffice/gateway/user/create.gateway";
import User from "@app/infrastructure/model/user";
import {Injectable} from "@nestjs/common";

@Injectable()
export class CreateRepository implements CreateGateway {

    create(user: User): Promise<User> {
        return User.create(user.toJSON(),
            {
                returning: true,
                raw: true
            })
    }

}