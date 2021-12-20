import {Injectable} from '@nestjs/common';
import User from "@app/infrastructure/model/user";

@Injectable()
export class UsersService {

    async findOne(email: string): Promise<User | undefined> {
        return User.findOne({
            where: {
                email: email
            }
        })
    }
}