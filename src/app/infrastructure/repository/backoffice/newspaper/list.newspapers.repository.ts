import {ListNewspapersGateway} from "@app/domain/backoffice/gateway/newspaper/list.newspapers.gateway";
import Newspaper from "@app/infrastructure/model/newspaper";
import NewspaperStatus from "@app/infrastructure/model/newspaper.status";

export class ListNewspapersRepository implements ListNewspapersGateway{
    findAll(offset: number, limit: number): Promise<any> {
        return Newspaper.findAndCountAll({
            attributes: ['id', 'number', 'principalTheme', 'folderUpload'],
            include: [
                {
                    model: NewspaperStatus,
                    attributes: ['id', 'value']
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