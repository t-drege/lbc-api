import {ListNewspapersGateway} from "@app/domain/backoffice/gateway/newspaper/list.newspapers.gateway";
import Newspaper from "@app/infrastructure/model/newspaper";
import NewspaperStatus from "@app/infrastructure/model/newspaper.status";
import Media from "@app/infrastructure/model/media";
import User from "@app/infrastructure/model/user";

export class ListNewspapersRepository implements ListNewspapersGateway{
    findAll(offset: number, limit: number): Promise<any> {
        return Newspaper.findAndCountAll({
            //attributes: ['id', 'number', 'principalTheme', 'folderUpload', 'publishedAt'],
            include: [
                {
                    model: NewspaperStatus,
                    attributes: ['id', 'value']
                },
                {
                    model: Media
                },
                {
                    model: User
                }
            ],
            limit: limit,
            offset: offset,
            order: [
                ['createdAt', 'DESC'],
            ]
        })
    }
}