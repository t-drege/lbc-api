import {UpdateNewspaperGateway} from "@app/domain/backoffice/gateway/newspaper/update.newspaper.gateway";
import Newspaper from "@app/infrastructure/model/newspaper";
import {Injectable} from "@nestjs/common";
import NewspaperStatus from "@app/infrastructure/model/newspaper.status";

@Injectable()
export class UpdateNewspaperRepository implements UpdateNewspaperGateway {
    public update(id: number, number: number, principalTheme: string, newspaperStatusId: number, publishedAt: Date, mediaId: number): Promise<[number, Newspaper[]]> {
        return Newspaper.update({
            number: number,
            principalTheme: principalTheme,
            newspaperStatusId: newspaperStatusId,
            publishedAt: publishedAt,
            mediaId: mediaId
        }, {
            where: {
                id: id
            },
            returning: true,
        })
    }

    public findNewspaperById(id: number): Promise<Newspaper> {
        return Newspaper.findByPk(id, {
            attributes: ['id', 'number', 'principalTheme'],
            include: [{
                model: NewspaperStatus,
                attributes: ['id', 'value']
            }]
        })
    }
}