import {AllUserGateway} from "@app/domain/backoffice/gateway/user/all.user.gateway";
import User from "@app/infrastructure/model/user";
import {Injectable} from "@nestjs/common";

@Injectable()
export class AllUserRepository implements AllUserGateway {
    findAllUsers(offset: number, limit: number, filters: object): Promise<any> {
        return User.findAndCountAll({
            //attributes: ['id', 'number', 'principalTheme', 'folderUpload'],
            where: filters,
            limit: limit,
            offset: offset,
            order: [
                ['createdAt', 'DESC'],
            ]
        })
    }

}