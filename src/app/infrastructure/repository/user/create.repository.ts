import CreateGateway from "@app/domain/backoffice/gateway/user/create.gateway";
import User from "@app/infrastructure/model/user";
import {Injectable} from "@nestjs/common";

@Injectable()
export class CreateRepository implements CreateGateway{

    findAll(): Promise<User[]> {
        return User.findAll()
    }

}